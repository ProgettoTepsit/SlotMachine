const reel1 = document.querySelector('.reel:nth-child(1)');
const reel2 = document.querySelector('.reel:nth-child(2)');
const reel3 = document.querySelector('.reel:nth-child(3)');
const spinButton = document.querySelector('.spin-button');

spinButton.addEventListener('click', () => {
  spin(reel1);
  spin(reel2);
  spin(reel3);
});

function spin(reel) {
  const symbols = reel.querySelectorAll('.img');
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  const spinDistance = randomSymbolIndex * -100;
  reel.style.transform = `translateY(${spinDistance}%)`;
  reel.classList.add('spin');
  reel.addEventListener('animationend', () => {
    reel.classList.remove('spin');
    reel.style.transform = 'translateY(0)';
  }, {once: true});
}