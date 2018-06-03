const preventDocumentZoom = () => {
  document.documentElement.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  });

  let lastTouchEnd = 0;
  document.documentElement.addEventListener('touchend', (e) => {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
};

export default preventDocumentZoom;
