const hint = document.querySelector('.hint');
setInterval(() => {
  hint.style.visibility = hint.style.visibility === 'hidden' ? 'visible' : 'visible';
}, 500);
