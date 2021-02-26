let pos = 0;

// Figure out how to incoporate array into imgSrc
// // const pacArray = [
//   ['./images/PacMan1.png', './images/PacMan2.png'],
//   ['./images/PacMan3.png', './images/PacMan4.png'],
// ];

let direction = 0;
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function makePac(){
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  let game = document.getElementById('game');
  let newImg = document.createElement('img');
  newImg.style.position = 'absolute';
  newImg.src = './images/download.png';
  newImg.wdith = 100;
  newImg.style.left = position.x;
  newImg.style.top = position.y;
  game.appendChild('newImg');

  return {
    position,
    velocity,
    newImg,
  };
}

function update() {
  pacMen.forEach((item)) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newImg.style.left = item.position.x;
    item.newImg.style.top = item.position.y;
  };
  setTimeout(update, 20);
}

function checkCollisions(item){
  let pageWidth = window.innerWidth;
  let pageHeight = window.innerHeight;
  let positionX = item.position.x + item.velocity.x + item.newImg.width;
  let positionY = item.position.y + item.velocity.y + item.newImg.height;

  if(positionX > pageWidth || item.position.x + item.veloxcity.x < 0)
  item.velocity.x = -item.velocity.x;

  if(positionY > pageHeight || item.position.y + item.position.y < 0)
  item.velocity.y = item.velocity.y;
}

function makeOne()
