'use strict';

var text_title = 'ALALALA';

var gElCanvas;
var gCtx;
var gImg = getImg();
var fontSize = getFontSize();
var currPos = getCurrPos();
var currLine = getLinePos();
console.log(fontSize);
console.log(currLine);

function onInit() {
  gElCanvas = document.querySelector('.my-canvas');
  gCtx = gElCanvas.getContext('2d');
  drawImg();
  initImages();
}

function renderGallery(imgs) {
  var strHtml = '';
  imgs.forEach(function (img, idx) {
    strHtml += `<img src="${img.url}" id="${img.id}" class="img-item" onclick="selectImg(this)"</img>`;
  });
  document.querySelector('.gallery-imgs').innerHTML = strHtml;
}

function drawImg() {
  var img = new Image();
  img.src = `${gImgs[gMeme.selectedImgId - 1].url}`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    var lines = getLines();
    lines.forEach(function (line) {
      drawText(line.txt, line.posY);
    });
  };
}

function drawText(text, y) {
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = 'black';
  gCtx.fillStyle = 'white';
  gCtx.font = `${fontSize}px Impact`;
  gCtx.textAlign = 'center';
  gCtx.fillText(text, gElCanvas.width / 2, y);
  gCtx.strokeText(text, gElCanvas.width / 2, y);
}

function onIncreaseFont() {
  fontSize += 5;
  drawImg();
}
function onDecreaseFont() {
  fontSize -= 5;
  drawImg();
}

function onIncreasePos() {
  currPos -= 10;
  drawImg();
}

function ondecreasePos() {
  currPos += 10;
  drawImg();
}
