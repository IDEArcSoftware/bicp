
(function () {
  const CASE_MEDIA = {
    case1: [{ src: "media/STREAM.mp4" }],
    case2: [{ src: "media/GIS.mp4" }],
    case3: [{ src: "media/BIM SECTIONS.mp4" }],
    case4: [
      { src: "media/BIM TIMELINER.mp4" },
      { src: "media/CLASH.mp4" }
    ]
  };

  function createVideo(src) {
    const video = document.createElement("video");
    video.className = "case-media-video";
    video.src = src;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("preload", "metadata");
    return video;
  }

  function renderGallery(slot, list) {
    const track = slot.querySelector(".case-media-gallery-track");
    const nav = slot.querySelector(".case-media-gallery-nav");
    if (!track || !nav) return;
    track.innerHTML = "";
    nav.innerHTML = "";

    const slides = list.map((media, index) => {
      const slide = document.createElement("div");
      slide.className = "case-media-slide" + (index === 0 ? " active" : "");
      slide.appendChild(createVideo(media.src));
      track.appendChild(slide);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", `Show video ${index + 1}`);
      btn.className = index === 0 ? "active" : "";
      btn.addEventListener("click", () => setActive(index));
      nav.appendChild(btn);

      return slide;
    });

    const navButtons = Array.from(nav.querySelectorAll("button"));

    function setActive(activeIndex) {
      slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === activeIndex);
      });
      navButtons.forEach((btn, idx) => {
        btn.classList.toggle("active", idx === activeIndex);
      });
    }
  }

  function renderCaseMedia(card, mediaList) {
    const slot = card.querySelector("[data-case-media]");
    if (!slot || !mediaList) return;
    const list = Array.isArray(mediaList) ? mediaList : [mediaList];

    if (slot.classList.contains("case-media-gallery")) {
      renderGallery(slot, list);
      return;
    }

    slot.innerHTML = "";
    list.forEach((media) => {
      slot.appendChild(createVideo(media.src));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-case-id]").forEach((card) => {
      const id = card.getAttribute("data-case-id");
      renderCaseMedia(card, CASE_MEDIA[id]);
    });
  });
})();
