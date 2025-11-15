(function (window, document) {
  const BICP = window.BICP || (window.BICP = {});
  const i18n = BICP.i18n || {};
  const t = i18n.t || ((key) => key);
  const getCurrentLang = i18n.getCurrentLang || (() => 'en');
  const config = BICP.config || {};
  const COMPANY_EMAIL = config.companyEmail || 'info@idearc.com.tr';
  const COMPANY_PHONE = config.companyPhone || '+90 212 823 12 34';
  const COMPANY_SITE = config.companySite || 'www.i-m.com.tr';

// PRICING CALC
function initPricingPage() {
  const projectTypeRadios = document.querySelectorAll('input[name="projectType"]');
  const archFields = document.getElementById("architecturalFields");
  const civilFields = document.getElementById("civilFields");
  const calculateBtn = document.getElementById("calculateBtn");
  const pdfBtn = document.getElementById("getPdfBtn");

  if (!calculateBtn || !archFields || !civilFields) return; // not on pricing page

  projectTypeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked && radio.value === "architectural") {
        archFields.style.display = "";
        civilFields.style.display = "none";
      } else if (radio.checked && radio.value === "civil") {
        archFields.style.display = "none";
        civilFields.style.display = "";
      }
    });
  });

  function calculateEstimate() {
    const lang = getCurrentLang();
    const type = document.querySelector('input[name="projectType"]:checked')?.value;
    const hasModel = document.querySelector('input[name="hasModel"]:checked')?.value;
    const decoration = document.querySelector('input[name="decoration"]:checked')?.value;
    const bimEnabled = document.querySelector('input[name="bimEnabled"]:checked')?.value;

    const lighting = document.getElementById("lightingToggle").checked;
    const foliage = document.getElementById("foliageToggle").checked;
    const traffic = document.getElementById("trafficToggle").checked;

    let base = 0;
    let sizeDesc = "";

    if (type === "architectural") {
      const area = parseFloat(document.getElementById("archArea").value || "0");
      const structures = parseFloat(document.getElementById("archStructures").value || "0");

      if (area <= 0 || structures <= 0) {
        alert(t("pricing-alert-arch"));
        return;
      }

      base = area * 2 + structures * 500; // YOU CAN TUNE THIS
      sizeDesc = `${area.toLocaleString()} m², ${structures} structure(s)`;
      if (lang === "tr") {
        sizeDesc = `${area.toLocaleString("tr-TR")} m², ${structures} yapı`;
      }
    } else if (type === "civil") {
      const km = parseFloat(document.getElementById("civilKm").value || "0");
      const intersections = parseFloat(document.getElementById("civilIntersections").value || "0");

      if (km <= 0) {
        alert(t("pricing-alert-civil"));
        return;
      }

      base = km * 1000 + intersections * 750; // YOU CAN TUNE THIS
      sizeDesc = `${km} km road, ${intersections} intersection(s)`;
      if (lang === "tr") {
        sizeDesc = `${km} km yol, ${intersections} kavşak`;
      }
    } else {
      alert("Select project type.");
      return;
    }

    let multiplier = 1;

    if (hasModel === "no") multiplier *= 1.2;
    if (decoration === "yes") multiplier *= 1.15;
    if (lighting) multiplier *= 1.1;
    if (foliage) multiplier *= 1.1;
    if (traffic) multiplier *= 1.15;
    if (bimEnabled === "yes") multiplier *= 1.25;

    const estimated = base * multiplier;
    const low = estimated * 0.85;
    const high = estimated * 1.15;

    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    });

    const estimateValue = document.getElementById("estimateValue");
    estimateValue.textContent =
      currencyFormatter.format(low) + " – " + currencyFormatter.format(high);

    const summaryList = document.getElementById("summaryList");
    summaryList.innerHTML = "";

    const liType = document.createElement("li");
    liType.textContent =
      type === "architectural"
        ? t("pricing-summary-type-arch")
        : t("pricing-summary-type-civil");
    summaryList.appendChild(liType);

    const liSize = document.createElement("li");
    liSize.textContent = t("pricing-summary-size-prefix") + sizeDesc;
    summaryList.appendChild(liSize);

    const liModel = document.createElement("li");
    liModel.textContent =
      hasModel === "yes"
        ? t("pricing-summary-have-model-yes")
        : t("pricing-summary-have-model-no");
    summaryList.appendChild(liModel);

    const liDeco = document.createElement("li");
    liDeco.textContent =
      decoration === "yes"
        ? t("pricing-summary-decoration-yes")
        : t("pricing-summary-decoration-no");
    summaryList.appendChild(liDeco);

    const liFeatures = document.createElement("li");
    const features = [];
    if (lighting) features.push(t("pricing-lighting-label"));
    if (foliage) features.push(t("pricing-foliage-label"));
    if (traffic) features.push(t("pricing-traffic-label"));
    liFeatures.textContent =
      t("pricing-summary-features-prefix") +
      (features.length ? features.join(", ") : t("pricing-summary-features-none"));
    summaryList.appendChild(liFeatures);

    const liBim = document.createElement("li");
    liBim.textContent =
      bimEnabled === "yes"
        ? t("pricing-summary-bim-yes")
        : t("pricing-summary-bim-no");
    summaryList.appendChild(liBim);
  }

  calculateBtn.addEventListener("click", calculateEstimate);

  function handlePdfExport() {
    const estimateValue = document.getElementById("estimateValue")?.textContent.trim();
    if (!estimateValue || estimateValue === "-") {
      alert(t("pricing-pdf-empty"));
      return;
    }

    const summaryList = document.getElementById("summaryList");
    const summaryItems = summaryList
      ? Array.from(summaryList.querySelectorAll("li")).map((li) => li.textContent.trim()).filter(Boolean)
      : [];
    const summaryMarkup = summaryItems.length
      ? summaryItems.map((item) => `<li>${item}</li>`).join("")
      : "<li>-</li>";

    const title = t("pricing-pdf-title");
    const estimateLabel = t("pricing-pdf-estimate-label");
    const summaryLabel = t("pricing-pdf-summary-label");
    const generatedLabel = t("pricing-pdf-generated");
    const contactLabel = t("pricing-pdf-contact");
    const footerText = t("pricing-pdf-footer");

    const lang = getCurrentLang();
    const locale = lang === "tr" ? "tr-TR" : "en-US";
    const timestamp = new Date().toLocaleString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert(t("pricing-pdf-popup-blocked"));
      return;
    }

    const styles = `
      :root {
        font-family: "Inter", "Segoe UI", Arial, sans-serif;
        color: #0b1020;
      }
      body {
        margin: 0;
        padding: 32px;
        background: #f2f4fb;
      }
      .sheet {
        max-width: 760px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 35px 90px rgba(15, 23, 42, 0.2);
        overflow: hidden;
      }
      .sheet-header {
        background: radial-gradient(circle at top, #1f2a44, #0a0f1c);
        padding: 32px 40px;
        color: #e8f2ff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }
      .brand {
        font-size: 1.3rem;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
      }
      .meta {
        text-align: right;
        font-size: 0.85rem;
        color: rgba(232, 242, 255, 0.85);
      }
      .content {
        padding: 32px 40px 38px 40px;
      }
      .estimate-card {
        border: 1px solid rgba(16, 24, 40, 0.08);
        border-radius: 16px;
        padding: 18px 22px;
        margin-bottom: 24px;
        background: linear-gradient(135deg, rgba(93, 245, 201, 0.12), rgba(53, 198, 255, 0.12));
      }
      .estimate-label {
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: #4b5565;
        margin-bottom: 6px;
      }
      .estimate-value {
        font-size: 1.8rem;
        font-weight: 600;
        color: #04121b;
      }
      h2 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: #4b5565;
        margin-bottom: 12px;
      }
      ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
      }
      li {
        padding: 10px 12px;
        border: 1px solid rgba(16, 24, 40, 0.08);
        border-radius: 12px;
        margin-bottom: 8px;
        font-size: 0.92rem;
        color: #0f172a;
        background: #fdfdfd;
      }
      .footer {
        border-top: 1px solid rgba(15, 23, 42, 0.08);
        margin-top: 28px;
        padding-top: 16px;
        font-size: 0.82rem;
        color: #4b5565;
        display: flex;
        justify-content: space-between;
      }
    `;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${title}</title>
          <style>${styles}</style>
        </head>
        <body>
          <div class="sheet">
            <div class="sheet-header">
              <div class="brand">BICP</div>
              <div class="meta">
                <div>${generatedLabel}: ${timestamp}</div>
                <div>${contactLabel}: ${COMPANY_EMAIL}</div>
              </div>
            </div>
            <div class="content">
              <div class="estimate-card">
                <div class="estimate-label">${estimateLabel}</div>
                <div class="estimate-value">${estimateValue}</div>
              </div>
              <h2>${summaryLabel}</h2>
              <ul>${summaryMarkup}</ul>
              <div class="footer">
                <span>${footerText}</span>
                <span>${COMPANY_PHONE} · ${COMPANY_SITE}</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 200);
  }

  if (pdfBtn) {
    pdfBtn.addEventListener("click", handlePdfExport);
  }
}

  BICP.pricing = {
    initPricingPage
  };
})(window, document);
