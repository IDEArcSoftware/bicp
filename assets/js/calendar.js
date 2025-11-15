(function (window, document) {
  const BICP = window.BICP || (window.BICP = {});
  const i18n = BICP.i18n || {};
  const t = i18n.t || ((key) => key);
  const config = BICP.config || {};
  const CALENDAR_BOOKING_URL = config.calendarBookingUrl || "";

  let calendarButtonInitialized = false;
  let calendarButtonInitHandle = null;

  function styleCalendarButton() {
    const button = document.querySelector(".calendar-button-wrapper .qxCTlb");
    if (!button) return;
    button.classList.add("btn-primary");
    button.setAttribute("type", "button");
    button.setAttribute("aria-label", t("calendar-button-label"));
  }

  function updateCalendarButtonLabel() {
    const button = document.querySelector(".calendar-button-wrapper .qxCTlb");
    if (!button) return;
    const label = t("calendar-button-label");
    button.textContent = label;
    button.setAttribute("aria-label", label);
  }

  function initCalendarButton() {
    if (!CALENDAR_BOOKING_URL) return;

    const target = document.getElementById("calendarBookingButton");
    if (!target) return;

    const tryLoad = () => {
      if (!window.calendar || !calendar.schedulingButton) {
        return false;
      }

      calendar.schedulingButton.load({
        url: CALENDAR_BOOKING_URL,
        color: "#039BE5",
        label: t("calendar-button-label"),
        target
      });
      calendarButtonInitialized = true;
      setTimeout(() => {
        styleCalendarButton();
        updateCalendarButtonLabel();
      }, 0);
      return true;
    };

    if (calendarButtonInitialized) {
      updateCalendarButtonLabel();
      return;
    }

    if (tryLoad()) {
      return;
    }

    if (calendarButtonInitHandle) {
      return;
    }

    let attempts = 20;
    calendarButtonInitHandle = setInterval(() => {
      if (tryLoad() || --attempts <= 0) {
        clearInterval(calendarButtonInitHandle);
        calendarButtonInitHandle = null;
      }
    }, 300);
  }

  BICP.calendar = {
    initCalendarButton,
    updateButtonLabel: updateCalendarButtonLabel
  };
})(window, document);
