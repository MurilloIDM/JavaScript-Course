const nanodegreenCard = document.querySelector('.card');

nanodegreenCard.textContent = 'Alterando o texto do card verde.';

const mainHeading = document.querySelector('h1');
const paragra = document.querySelector('p');
const newSpan = document.createElement('span');
newSpan.textContent = ' right now!';

mainHeading.appendChild(newSpan);
paragra.appendChild(newSpan);
console.log(mainHeading.innerHTML);

