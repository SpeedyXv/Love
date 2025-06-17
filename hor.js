function createFloatingHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.style.left = `${x - 9}px`;
  heart.style.top = `${y - 9}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5200);
}

// للمسة أولى
document.addEventListener('click', (e) => {
  createFloatingHeart(e.pageX, e.pageY);
});

// للحركة المستمرة – لو المستخدم يحرك إصبعه أو الماوس
document.addEventListener('mousemove', (e) => {
  if (e.buttons > 0) { // لو فيه ضغط مستمر
    createFloatingHeart(e.pageX, e.pageY);
  }
});

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  if (touch) {
    createFloatingHeart(touch.pageX, touch.pageY);
  }
});