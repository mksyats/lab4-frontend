const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const firstEl = document.getElementById('author');
const secondEl = document.querySelector('h3');

firstEl.addEventListener('click', () => {
  const randomBgColor = getRandomColor();
  const randomTextColor = getRandomColor();
  firstEl.style.backgroundColor = randomBgColor;
  firstEl.style.color = randomTextColor;
});

secondEl.addEventListener('click', () => {
  const randomBgColor = getRandomColor();
  const randomTextColor = getRandomColor();
  secondEl.style.backgroundColor = randomBgColor;
  secondEl.style.color = randomTextColor;
});

const imageContainer = document.getElementById('imageContainer');
const addButton = document.getElementById('addButton');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const removeButton = document.getElementById('removeButton');

let currentImage = document.getElementById('image');

addButton.addEventListener('click', () => {
  if (!currentImage) {
    const newImage = document.createElement('img');
    newImage.src = 'bremen.jpg';
    newImage.alt = 'Бремен';
    newImage.width = '600';
    imageContainer.insertBefore(newImage, imageContainer.firstChild);
    currentImage = newImage;
  }
});

increaseButton.addEventListener('click', () => {
  if (currentImage) {
    const currentWidth = currentImage.clientWidth;
    currentImage.style.width = currentWidth * 1.1 + 'px';
  }
});

decreaseButton.addEventListener('click', () => {
  if (currentImage) {
    const currentWidth = currentImage.clientWidth;
    currentImage.style.width = currentWidth * 0.9 + 'px';
  }
});

removeButton.addEventListener('click', () => {
  if (currentImage) {
    imageContainer.removeChild(currentImage);
    currentImage = null;
  }
});
