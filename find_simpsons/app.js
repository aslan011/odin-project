const img = document.querySelector('#img');
const container = document.querySelector('#content');
const collection = [];
const list = document.getElementById('highScores');

let charactersFound = 0;
let timeStart = 0;
let timeFinish = 0;
let clicked = false;

function reset() {
  timeStart = 0;
  timeFinish = 0;
  charactersFound = 0;
  clicked = false;
  const images = document.getElementsByClassName('circles');
  while (images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
  }
}

function startTiming() {
  timeStart = Date.now();
}

db.collection('cords')
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      collection.push(doc);
    });
  });

function listDOM(score) {
  const listItem = document.createElement('li');
  listItem.textContent = `${score.data().name}: ${score.data().time} seconds`;
  list.appendChild(listItem);
}

function getScores() {
  db.collection('highScores')
    .orderBy('time')
    .get()
    .then(snapshot => {
      snapshot.forEach(score => {
        listDOM(score);
      });
    });
}

getScores();

function saveTime(time, name) {
  list.innerHTML = '';
  db.collection('highScores').add({
    name,
    time
  });
  getScores();
  reset();
}

function checkCompleted() {
  charactersFound += 1;

  if (charactersFound === 1) {
    timeFinish = Date.now();
    const timeTaken = Math.floor((timeFinish - timeStart) / 1000);
    if (window.confirm(`You took ${timeTaken} seconds, save your score?`)) {
      const name = window.prompt('What is your name?');
      if (name === null || name === '') {
        alert('Please enter name');
        reset();
      } else {
        saveTime(timeTaken, name);
      }
    } else {
      reset();
    }
  }
}

function addImage(x, y) {
  const circle = document.createElement('img');
  circle.src = './circle.png';
  circle.classList.add('circles');
  circle.style.left = `${x - 20}px`;
  circle.style.top = `${y - 20}px`;
  container.appendChild(circle);
  checkCompleted();
}

function userClick(x, y, chosen) {
  collection.forEach(character => {
    if (character.data().name === chosen) {
      for (let i = 0; i < 15; i++) {
        if (x + i === character.data().X || x - i === character.data().X) {
          for (let r = 0; r < 15; r++) {
            if (y + r === character.data().Y || y - r === character.data().Y) {
              addImage(character.data().X, character.data().Y);
            }
          }
        }
      }
    }
  });
}

img.addEventListener('click', e => {
  const chosen = document.getElementById('characters').value;
  if (clicked === true) {
    userClick(e.pageX, e.pageY, chosen);
  }
});

document.getElementById('start').addEventListener('click', () => {
  clicked = true;
  startTiming();
});
