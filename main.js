document.querySelectorAll("img").forEach((img) => {
  const dropIfMissing = () => {
    if (img.naturalWidth === 0) img.remove();
  };

  if (img.complete) dropIfMissing();
  else img.addEventListener("error", () => img.remove());
});

document.querySelectorAll("#instagram video").forEach((video) => {
  const drop = () => video.remove();
  if (video.error) drop();
  else video.addEventListener("error", drop);

  if (video.isConnected && video.readyState >= 2) video.classList.add("ig-ready");
  else video.addEventListener("loadeddata", () => video.classList.add("ig-ready"));
});

document.querySelectorAll("#instagram .ig-cell--reel").forEach((cell) => {
  const button = cell.querySelector(".ig-sound");
  const video = cell.querySelector("video");
  if (!button || !video) return;

  button.addEventListener("click", () => {
    const turnOn = video.muted;

    document.querySelectorAll("#instagram .ig-cell--reel").forEach((other) => {
      const otherVideo = other.querySelector("video");
      const otherButton = other.querySelector(".ig-sound");
      if (!otherVideo || !otherButton) return;
      otherVideo.muted = true;
      otherButton.setAttribute("aria-pressed", "false");
      otherButton.setAttribute("aria-label", "Включить звук");
      otherButton.querySelector(".ig-sound__label").textContent = "Звук";
    });

    if (!turnOn) return;

    video.muted = false;
    video.play().catch(() => {});
    button.setAttribute("aria-pressed", "true");
    button.setAttribute("aria-label", "Выключить звук");
    button.querySelector(".ig-sound__label").textContent = "Звук вкл";
  });
});
