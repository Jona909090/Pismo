const scene = document.getElementById('scene');
const envelope = document.getElementById('envelope');
const letter = document.querySelector('.letter');

letter.addEventListener('animationend', (e) => {
  if (e.animationName === 'letterOpen') {
    letter.classList.remove('opening');
    letter.classList.add('open');
  }
  if (e.animationName === 'letterClose') {
    letter.classList.remove('closing');
    scene.classList.remove('open');
  }
});

function openLetter() {
  envelope.classList.add('open');
  scene.classList.add('open');
  letter.classList.remove('closing', 'open');
  letter.classList.add('opening');
}

function closeLetter() {
  letter.classList.remove('open', 'opening');
  letter.classList.add('closing');
  setTimeout(() => envelope.classList.remove('open'), 250);
}
