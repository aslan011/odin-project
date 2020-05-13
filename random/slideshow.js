const image = document.querySelector('img');
const indi = Array.from(document.querySelectorAll('.indicator'));

const images = [
  'file:///home/user1/the_odin_project/cat.jpeg',
  'file:///home/user1/the_odin_project/lion.jpeg',
  'file:///home/user1/the_odin_project/squirrel.jpeg',
];

function indiColor(index) {
  console.log(index);
  const circle = indi[index];
  indi.forEach((i) => (i.style.backgroundColor = '#bbb'));
  circle.style.backgroundColor = 'black';
}

function changeImage(event) {
  image.classList.remove('addedClass');
  image.classList.add('removeClass');
  const index = images.indexOf(image.src);
  const newIndex = index + 1;
  if (newIndex >= images.length) {
    image.src = images[0];
    image.classList.remove('removeClass');
    setTimeout(() => {
      image.classList.toggle('addedClass');
    }, 1000);
    indiColor(0);
  } else {
    image.src = images[newIndex];
    indiColor(newIndex);
    setTimeout(() => {
      image.classList.remove('removeClass');
      image.classList.toggle('addedClass');
    }, 1000);
  }
}

function previousImage(event) {
  const index = images.indexOf(image.src);
  const newIndex = index - 1;
  if (newIndex < 0) {
    image.src = images[0];
    indiColor(0);
  } else {
    image.src = images[newIndex];
    indiColor(newIndex);
  }
}

function imageIn(i) {
  image.src = images[i.id];
  indiColor(i.id);
}

document.getElementById('next').addEventListener('click', (event) => {
  changeImage(event);
});

document.getElementById('previous').addEventListener('click', (event) => {
  previousImage(event);
});

const indicators = Array.from(document.getElementsByClassName('indicator'));

indicators.forEach((event) =>
  event.addEventListener('click', (e) => imageIn(e.target))
);
