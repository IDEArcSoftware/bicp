(function () {
  const CASE_MEDIA = {
    case1: {
      src: "media/STREAM.mp4"
    },
    case2: {
      src: "media/GIS.mp4"
    }
  };

  function renderCaseMedia(card, media) {
    const slot = card.querySelector("[data-case-media]");
    if (!slot || !media) return;
    slot.innerHTML = "";
    const video = document.createElement("video");
    video.className = "case-media-video";
    video.src = media.src;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("preload", "metadata");
    slot.appendChild(video);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-case-id]").forEach((card) => {
      const id = card.getAttribute("data-case-id");
      renderCaseMedia(card, CASE_MEDIA[id]);
    });
  });
})();
