// TRANSLATIONS
const translations = {
  en: {
    "logo-sub": "Infrastructure Digital Twins",
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-products": "Products",
    "nav-tech": "Technology",
    "nav-cases": "Case Studies",
    "nav-about": "About",
    "nav-pricing": "Pricing",
    "nav-cta": "Contact",
    "nav-contact-foot": "Contact",

    "hero-eyebrow": "Real-Time Infrastructure Digital Twins",
    "hero-title": "High-Fidelity <span>Visualization</span> for Highways & Cities.",
    "hero-text":
      "BICP transforms BIM, GIS, Lidar, and engineering data into immersive, interactive 3D environments powered by Unreal Engine and NVIDIA RTX. Backed by IDEArc Uluslararası Mühendislik ve Müşavirlik Ltd. Şti, MME Mimarlık and LXIR Teknoloji by Gökhan Dönmez.",
    "badge-dt": "Digital Twins",
    "hero-cta-primary": "Talk to BICP <span>→</span>",
    "hero-cta-secondary": "Watch a Project Demo",
    "hero-usecases-label": "Use Cases",
    "hero-usecases-value": "Highways · Bridges · Urban Corridors",
    "hero-datasources-label": "Data Sources",
    "hero-datasources-value": "BIM · CAD · GIS · Lidar · DEM",
    "hero-deploy-label": "Deployment",
    "hero-deploy-value": "Cloud-hosted on RTX 6000 Ada GPUs",
    "hero-chip-text": "BICP · UE5 Viewport · Placeholder",
    "hero-media-ph-title": "HERO MEDIA PLACEHOLDER",
    "hero-media-ph-body":
      "Insert BICP UE5 cinematic or infrastructure scene preview here.",
    "hero-media-ph-note":
      "Suggested: 8–12s looped MP4, muted autoplay.",
    "hero-media-tag": "Demo · BICP Digital Twin",

    "services-title": "Services",
    "services-subtitle":
      "BICP provides end-to-end visualization and digital twin services for infrastructure projects, from data preparation to real-time, RTX-accelerated delivery.",

    "service1-title": "Infrastructure Visualization (UE5)",
    "service1-text":
      "High-fidelity, real-time environments for highways, bridges, tunnels, rail and urban projects, built directly from your engineering data.",
    "service1-li1": "Unreal Engine 5.6 real-time scenes",
    "service1-li2": "2–20 km terrain visualization",
    "service1-li3": "Cinematic camera paths & flythroughs",
    "service1-tag": "Visualization",

    "service2-title": "Digital Twin Development",
    "service2-text":
      "We merge BIM, GIS, Lidar, and photogrammetry into a unified digital twin with engineering-grade detail and metadata.",
    "service2-li1": "IFC4.3 + GIS integration",
    "service2-li2": "Interactive UI & metadata panels",
    "service2-li3": "Layer-based visual controls",
    "service2-tag": "Digital Twins",

    "service3-title": "VR & Immersive Experiences",
    "service3-text":
      "Immersive presentations for stakeholders and the public, optimized for Meta Quest and similar devices.",
    "service3-li1": "VR design reviews",
    "service3-li2": "Public consultation experiences",
    "service3-li3": "360° walkthroughs",
    "service3-tag": "Immersive",

    "service4-title": "Traffic & Mobility Visualization",
    "service4-text":
      "We visualize traffic simulation outputs to communicate operational impacts in an intuitive 3D environment.",
    "service4-li1": "SUMO / VISSIM / CARLA integration",
    "service4-li2": "Animated vehicles & signals",
    "service4-li3": "Scenario-based visualizations",
    "service4-tag": "Simulation",

    "service5-title": "Engineering Project Communication",
    "service5-text":
      "Visual content crafted for municipalities, funding agencies, and public meetings.",
    "service5-li1": "4K animations and stills",
    "service5-li2": "360° videos for web & VR",
    "service5-li3": "Design narrative development",
    "service5-tag": "Communication",

    "service6-title": "Data Preparation & Optimization",
    "service6-text":
      "We clean and optimize engineering datasets for real-time usage without compromising fidelity.",
    "service6-li1": "Geometry & LOD optimization",
    "service6-li2": "Texture/asset management",
    "service6-li3": "Pipeline automation consulting",
    "service6-tag": "Pipeline",

    // Products, Tech, Cases, About, Contact etc...
    // (keep all keys from previous version; omitted here for brevity)

    "contact-title": "Contact",
    "contact-subtitle":
      "Share your project details or data sources, and BICP will get back to you with a tailored visualization or digital twin proposal.",
    "contact-name-label": "Name",
    "contact-company-label": "Company",
    "contact-email-label": "Email",
    "contact-project-label": "Project Description",
    "contact-project-ph":
      "Briefly describe your infrastructure project, data formats (e.g. DWG, IFC, GIS), and expected deliverables.",
    "contact-files-label": "Upload Reference Files (optional)",
    "contact-submit": "Send Message",
    "contact-email-title": "Email",
    "contact-phone-title": "Phone",
    "contact-location-title": "Location",
    "contact-highlight":
      "Prefer a live demo? Add a Calendly or booking link here so clients can schedule a call with BICP.",

    "footer-text":
      "© <span id=\"year\"></span> BICP — Infrastructure Digital Twins & Visualization.",

    /* PRICING (EN) */
    "pricing-eyebrow": "Pricing Estimator",
    "pricing-title": "Estimate your visualization package",
    "pricing-subtitle":
      "This tool helps you approximate the budget for a BICP project based on project type, size, and features. Final pricing is confirmed after reviewing your data and scope.",

    "pricing-type-label": "Type",
    "pricing-type-arch": "Architectural",
    "pricing-type-civil": "Civil",
    "pricing-type-help":
      "Architectural: building / campus projects. Civil: roads, interchanges, corridors.",

    "pricing-arch-area-label": "Total Built Area (m²)",
    "pricing-arch-area-ph": "e.g. 2500",
    "pricing-arch-structures-label": "Number of Structures",
    "pricing-arch-structures-ph": "e.g. 3",

    "pricing-civil-km-label": "Kilometers of Road",
    "pricing-civil-km-ph": "e.g. 5",
    "pricing-civil-int-label": "Number of Intersections",
    "pricing-civil-int-ph": "e.g. 4",

    "pricing-model-label": "Do you have a 3D model?",
    "pricing-model-yes": "Yes",
    "pricing-model-no": "No",
    "pricing-model-help":
      "“Yes” means you already have CAD/BIM/3D files we can use as a starting point.",

    "pricing-decoration-label": "Do you need decoration / props?",
    "pricing-decoration-no": "No / Minimal",
    "pricing-decoration-yes": "Yes, detailed",

    "pricing-bim-label": "Do you want a BIM-enabled model?",
    "pricing-bim-no": "No",
    "pricing-bim-yes": "Yes (IFC / data-rich)",
    "pricing-bim-help":
      "BIM-enabled models include structured metadata and navigation through BIM data.",

    "pricing-calc-btn": "Calculate Estimate",

    "pricing-features-label": "Visual Features",
    "pricing-features-help":
      "Toggle the options you want to include in your package.",
    "pricing-lighting-label": "Lighting",
    "pricing-lighting-desc": "Day/night, time-of-day, basic scenarios.",
    "pricing-foliage-label": "Foliage",
    "pricing-foliage-desc": "Trees, green areas, context vegetation.",
    "pricing-traffic-label": "Traffic",
    "pricing-traffic-desc": "Vehicles, basic traffic flows, animation.",

    "pricing-estimate-label": "Estimate*",
    "pricing-estimate-note":
      "*This is a rough, non-binding estimate. Final pricing depends on data quality, revisions, schedule, and detailed scope.",
    "pricing-summary-initial":
      "Choose your project parameters and click “Calculate Estimate”.",
    "pricing-contact-sales": "Contact Sales",
    "pricing-disclaimer":
      "Disclaimer: All values here are indicative only and do not constitute an offer. BICP will provide a formal proposal after reviewing your project and data.",

    "pricing-alert-arch":
      "Please enter total area (m²) and number of structures.",
    "pricing-alert-civil":
      "Please enter kilometers of road (km).",

    "pricing-summary-type-arch":
      "Type: Architectural (Building / campus-focused).",
    "pricing-summary-type-civil":
      "Type: Civil (Road / corridor-focused).",
    "pricing-summary-size-prefix": "Size: ",
    "pricing-summary-have-model-yes": "Have model: Yes",
    "pricing-summary-have-model-no": "Have model: No",
    "pricing-summary-decoration-no": "Decoration: Minimal or none.",
    "pricing-summary-decoration-yes": "Decoration: Detailed decoration requested.",
    "pricing-summary-features-prefix": "Features: ",
    "pricing-summary-features-none": "Base visualization",
    "pricing-summary-bim-yes": "BIM-enabled model: Yes",
    "pricing-summary-bim-no": "BIM-enabled model: No",

    "pricing-contact-thanks-en":
      "Thank you! This form is currently a placeholder. Please connect it to your backend or email service."
  },

  tr: {
    "logo-sub": "Altyapı Dijital İkizleri",
    "nav-home": "Ana Sayfa",
    "nav-services": "Hizmetler",
    "nav-products": "Ürünler",
    "nav-tech": "Teknoloji",
    "nav-cases": "Projeler",
    "nav-about": "Hakkımızda",
    "nav-pricing": "Fiyatlandırma",
    "nav-cta": "İletişim",
    "nav-contact-foot": "İletişim",

    "hero-eyebrow": "Gerçek Zamanlı Altyapı Dijital İkizleri",
    "hero-title":
      "Otoyollar ve Kentler için Yüksek Doğrulukta <span>Görselleştirme</span>.",
    "hero-text":
      "BICP, BIM, CBS, Lidar ve mühendislik verilerini Unreal Engine ve NVIDIA RTX ile çalışan, sürükleyici ve etkileşimli 3B ortamlara dönüştürür. IDEArc Uluslararası Mühendislik ve Müşavirlik Ltd. Şti., MME Mimarlık ve Gökhan Dönmez’in LXIR Teknoloji girişimi tarafından desteklenmektedir.",
    "badge-dt": "Dijital İkizler",
    "hero-cta-primary": "BICP ile İletişime Geç <span>→</span>",
    "hero-cta-secondary": "Proje Demosu İzle",
    "hero-usecases-label": "Kullanım Alanları",
    "hero-usecases-value": "Otoyollar · Köprüler · Kentsel Koridorlar",
    "hero-datasources-label": "Veri Kaynakları",
    "hero-datasources-value": "BIM · CAD · CBS · Lidar · DEM",
    "hero-deploy-label": "Kullanım",
    "hero-deploy-value":
      "Bulutta NVIDIA RTX 6000 Ada GPU'lar üzerinde barındırılır",
    "hero-chip-text": "BICP · UE5 Görünümü · Placeholder",
    "hero-media-ph-title": "ANA GÖRSEL YER TUTUCU",
    "hero-media-ph-body":
      "Buraya BICP UE5 sinematik veya altyapı sahnesi ön izlemesini ekleyin.",
    "hero-media-ph-note":
      "Önerilen: 8–12 sn döngülü, sessiz MP4.",
    "hero-media-tag": "Demo · BICP Dijital İkiz",

    "services-title": "Hizmetler",
    "services-subtitle":
      "BICP, altyapı projeleri için veri hazırlığından gerçek zamanlı, RTX hızlandırmalı sunuma kadar uçtan uca görselleştirme ve dijital ikiz hizmetleri sunar.",

    // ... keep all the TR keys from earlier version ...

    "contact-title": "İletişim",
    "contact-subtitle":
      "Proje detaylarınızı veya veri kaynaklarınızı bizimle paylaşın; BICP size özel bir görselleştirme veya dijital ikiz teklifiyle geri dönsün.",
    "contact-name-label": "Ad Soyad",
    "contact-company-label": "Kurum / Şirket",
    "contact-email-label": "E-posta",
    "contact-project-label": "Proje Açıklaması",
    "contact-project-ph":
      "Altyapı projenizi, elinizdeki veri formatlarını (ör. DWG, IFC, CBS) ve beklediğiniz çıktıları kısaca anlatın.",
    "contact-files-label": "Referans Dosya Yükle (opsiyonel)",
    "contact-submit": "Mesaj Gönder",
    "contact-email-title": "E-posta",
    "contact-phone-title": "Telefon",
    "contact-location-title": "Konum",
    "contact-highlight":
      "Canlı demo tercih ediyorsanız buraya bir Calendly veya randevu bağlantısı ekleyerek müşterilerin BICP ile toplantı planlamasını sağlayabilirsiniz.",

    "footer-text":
      "© <span id=\"year\"></span> BICP — Altyapı Dijital İkizleri ve Görselleştirme.",

    /* PRICING (TR) */
    "pricing-eyebrow": "Fiyatlandırma Araçları",
    "pricing-title": "Görselleştirme paketinizin tahminini alın",
    "pricing-subtitle":
      "Bu araç, proje tipi, büyüklüğü ve özelliklerine göre BICP projesi için yaklaşık bütçe aralığını görmenize yardımcı olur. Kesin fiyat, verileriniz ve kapsam incelendikten sonra netleşir.",

    "pricing-type-label": "Tür",
    "pricing-type-arch": "Mimari",
    "pricing-type-civil": "Ulaştırma / Altyapı",
    "pricing-type-help":
      "Mimari: bina / kampüs projeleri. Ulaştırma: yol, kavşak, koridor projeleri.",

    "pricing-arch-area-label": "Toplam Kapalı Alan (m²)",
    "pricing-arch-area-ph": "örn. 2500",
    "pricing-arch-structures-label": "Yapı Adedi",
    "pricing-arch-structures-ph": "örn. 3",

    "pricing-civil-km-label": "Yol Uzunluğu (km)",
    "pricing-civil-km-ph": "örn. 5",
    "pricing-civil-int-label": "Kavşak Adedi",
    "pricing-civil-int-ph": "örn. 4",

    "pricing-model-label": "Hazır 3B modeliniz var mı?",
    "pricing-model-yes": "Evet",
    "pricing-model-no": "Hayır",
    "pricing-model-help":
      "“Evet” mevcut CAD/BIM/3B dosyalarınızı başlangıç noktası olarak kullanabileceğimiz anlamına gelir.",

    "pricing-decoration-label": "Dekorasyon / obje yerleştirme istiyor musunuz?",
    "pricing-decoration-no": "Hayır / Minimal",
    "pricing-decoration-yes": "Evet, detaylı",

    "pricing-bim-label": "BIM özellikli bir model ister misiniz?",
    "pricing-bim-no": "Hayır",
    "pricing-bim-yes": "Evet (IFC / veri zengin)",
    "pricing-bim-help":
      "BIM özellikli modeller, yapılandırılmış metaveri ve BIM verisiyle gezinme imkânı sağlar.",

    "pricing-calc-btn": "Tahmin Hesapla",

    "pricing-features-label": "Görsel Özellikler",
    "pricing-features-help":
      "Pakete dahil etmek istediğiniz özellikleri işaretleyin.",
    "pricing-lighting-label": "Aydınlatma",
    "pricing-lighting-desc": "Gündüz/gece, günün saati, temel senaryolar.",
    "pricing-foliage-label": "Bitki Örtüsü",
    "pricing-foliage-desc": "Ağaçlar, yeşil alanlar, çevre bitkilendirme.",
    "pricing-traffic-label": "Trafik",
    "pricing-traffic-desc": "Araçlar, temel trafik akışı, animasyon.",

    "pricing-estimate-label": "Tahmini Bütçe*",
    "pricing-estimate-note":
      "*Bu değerler yaklaşık ve bağlayıcı değildir. Kesin fiyat; veri kalitesi, revizyon sayısı, takvim ve kapsam netleştikten sonra teklif ile bildirilir.",
    "pricing-summary-initial":
      "Parametreleri seçin ve “Tahmin Hesapla” butonuna tıklayın.",
    "pricing-contact-sales": "Satış ile İletişime Geç",
    "pricing-disclaimer":
      "Not: Buradaki tüm tutarlar yaklaşık aralıklardır ve teklif niteliği taşımaz. BICP, proje ve verileriniz incelendikten sonra resmi teklif paylaşacaktır.",

    "pricing-alert-arch":
      "Lütfen toplam alan (m²) ve yapı adedini girin.",
    "pricing-alert-civil":
      "Lütfen yol uzunluğunu (km) girin.",

    "pricing-summary-type-arch":
      "Tür: Mimari (bina / kampüs odaklı).",
    "pricing-summary-type-civil":
      "Tür: Ulaştırma / altyapı (yol / koridor odaklı).",
    "pricing-summary-size-prefix": "Büyüklük: ",
    "pricing-summary-have-model-yes": "Model durumu: Hazır model var.",
    "pricing-summary-have-model-no": "Model durumu: Sıfırdan modelleme gerekiyor.",
    "pricing-summary-decoration-no": "Dekorasyon: Minimal veya yok.",
    "pricing-summary-decoration-yes":
      "Dekorasyon: Detaylı obje ve sahne düzenlemesi isteniyor.",
    "pricing-summary-features-prefix": "Özellikler: ",
    "pricing-summary-features-none": "Temel görselleştirme",
    "pricing-summary-bim-yes": "BIM özellikli model: Evet.",
    "pricing-summary-bim-no": "BIM özellikli model: Hayır.",

    "pricing-contact-thanks-en":
      "Teşekkürler! Bu form şu an örnek amaçlıdır. Lütfen arka uç veya e-posta servisine bağlayın."
  }
};

// HELPERS
function getCurrentLang() {
  return localStorage.getItem("BICP-lang") || "en";
}

function t(key) {
  const lang = getCurrentLang();
  const dict = translations[lang] || translations.en;
  return dict[key] || translations.en[key] || key;
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.documentElement.lang = lang;
}

// CONTACT FORM (INDEX)
function handleContactSubmit(event) {
  event.preventDefault();
  const lang = getCurrentLang();
  const msg =
    lang === "tr"
      ? "Teşekkürler! Bu form şu an örnek amaçlıdır. Lütfen arka uç veya e-posta servisine bağlayın."
      : "Thank you! This form is currently a placeholder. Please connect it to your backend or email service.";
  alert(msg);
}

// PRICING CALC
function initPricingPage() {
  const projectTypeRadios = document.querySelectorAll('input[name="projectType"]');
  const archFields = document.getElementById("architecturalFields");
  const civilFields = document.getElementById("civilFields");
  const calculateBtn = document.getElementById("calculateBtn");

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
}

// NAV & LANG INIT
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const langButtons = document.querySelectorAll(".lang-btn");

  // Mobile nav
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  // Language buttons
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      localStorage.setItem("BICP-lang", lang);
      langButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyTranslations(lang);
    });
  });

  // Init language (shared)
  const savedLang = getCurrentLang();
  applyTranslations(savedLang);
  langButtons.forEach((b) => {
    if (b.getAttribute("data-lang") === savedLang) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Pricing page init
  if (document.getElementById("pricing-page")) {
    initPricingPage();
  }
});
