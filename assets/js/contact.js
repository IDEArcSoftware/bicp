(function (window, document) {
  const BICP = window.BICP || (window.BICP = {});
  const i18n = BICP.i18n || {};
  const t = i18n.t || ((key) => key);
  const getCurrentLang = i18n.getCurrentLang || (() => "en");
  const config = BICP.config || {};

  const CONTACT_ENDPOINT = config.contactEndpoint || "/api/contact";
  const MAX_FILES = Number(config.contactMaxFiles || 3);
  const MAX_FILE_SIZE_MB = Number(config.contactMaxFileSizeMB || 5);
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
  const ACCEPTED_TYPES = [
    "application/pdf",
    "application/zip",
    "application/x-zip-compressed",
    "application/x-7z-compressed",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "image/jpeg",
    "image/png",
    "application/octet-stream"
  ];

  function updateStatus(statusEl, messageKey, isError) {
    if (!statusEl) return;
    statusEl.classList.toggle("error", Boolean(isError));
    statusEl.textContent = messageKey ? t(messageKey) : "";
  }

  function formatMessage(template, replacements) {
    let output = template;
    Object.entries(replacements).forEach(([key, value]) => {
      output = output.replace(new RegExp(`{${key}}`, "g"), value);
    });
    return output;
  }

  function isAllowedType(type) {
    if (!type) return true;
    return ACCEPTED_TYPES.some((allowed) => {
      if (allowed.endsWith("/*")) {
        return type.startsWith(allowed.slice(0, -1));
      }
      return allowed === type;
    });
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result || "";
        const content = result.toString().split(",").pop();
        resolve({
          name: file.name,
          size: file.size,
          type: file.type,
          content
        });
      };
      reader.onerror = () => reject(new Error("file_read_failed"));
      reader.readAsDataURL(file);
    });
  }

  async function serializeFiles(fileList) {
    if (!fileList || !fileList.length) {
      return [];
    }

    if (fileList.length > MAX_FILES) {
      const template = t("contact-error-too-many-files");
      throw new Error(formatMessage(template, { max: MAX_FILES }));
    }

    const oversized = Array.from(fileList).find((file) => file.size > MAX_FILE_SIZE_BYTES);
    if (oversized) {
      const template = t("contact-error-file-too-large");
      throw new Error(formatMessage(template, { max: MAX_FILE_SIZE_MB }));
    }

    const invalidType = Array.from(fileList).find((file) => !isAllowedType(file.type));
    if (invalidType) {
      throw new Error(t("contact-error-file-type"));
    }

    return Promise.all(Array.from(fileList).map((file) => fileToBase64(file)));
  }

  async function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const statusEl = document.getElementById("contactStatus");

    updateStatus(statusEl, "contact-send-working", false);

    const formData = new FormData(form);
    const name = (formData.get("name") || "").trim();
    const company = (formData.get("company") || "").trim();
    const email = (formData.get("email") || "").trim();
    const project = (formData.get("project") || "").trim();
    const filesInput = form.querySelector("#files");

    if (!name || !email || !project) {
      updateStatus(statusEl, "contact-error-required", true);
      return;
    }

    try {
      const attachments = await serializeFiles(filesInput ? filesInput.files : null);

      const payload = {
        name,
        company,
        email,
        project,
        locale: getCurrentLang(),
        attachments
      };

      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      const data = await response.json().catch(() => ({}));
      const messageKey = data.messageKey || "contact-send-success";
      updateStatus(statusEl, messageKey, false);
      form.reset();
    } catch (error) {
      if (error.message && error.message.startsWith("You can")) {
        statusEl.classList.add("error");
        statusEl.textContent = error.message;
        return;
      }

      const templateMessages = [
        "contact-error-too-many-files",
        "contact-error-file-too-large",
        "contact-error-file-type"
      ];
      if (templateMessages.includes(error.message)) {
        updateStatus(statusEl, error.message, true);
      } else {
        console.error("Contact submission failed", error);
        updateStatus(statusEl, "contact-send-error", true);
      }
    }
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", handleContactSubmit);
  }

  BICP.contact = {
    initContactForm
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactForm);
  } else {
    initContactForm();
  }

  // Legacy global (kept for backward compatibility)
  window.handleContactSubmit = handleContactSubmit;
})(window, document);
