localStorage.setItem(
  'object',
  JSON.stringify({ title: 'thisBook', author: 'thisGuy' })
);
const test = localStorage.getItem('object');

const testing = JSON.parse(test);
console.log(testing);
console.log(testing.title);

const myArray = [];

Object.values(localStorage).forEach(key => myArray.push(localStorage[key]));

console.log(myArray);
function dropDown(id) {
  const list = document.getElementById(id);
  if (list.style.visibility === 'hidden' || list.style.visibility === '') {
    list.style.visibility = 'visible';
  } else if (list.style.visibility === 'visible') {
    list.style.visibility = 'hidden';
  }
}

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', event => {
  dropDown(event.target.attributes.name.textContent);
});
