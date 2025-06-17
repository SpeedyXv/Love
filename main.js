window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('myAudio');

  // محاولة تشغيل الصوت تلقائيًا
  audio.play().catch(() => {
    // إذا فشل التشغيل التلقائي، شغل الصوت عند أول نقرة
    const tryPlay = () => {
      audio.play();
      document.removeEventListener('click', tryPlay);
    };
    document.addEventListener('click', tryPlay);
  });
});