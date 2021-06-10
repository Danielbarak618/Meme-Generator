'use strict';

var text_title = 'ALALALA';

var gElCanvas;
var gCtx;
var gImg = getImg();
var currPos = 100;

var currLine = getLinePos();

function onInit() {
  gElCanvas = document.querySelector('.my-canvas');
  gCtx = gElCanvas.getContext('2d');
  drawImg();
  initImages();
  initPage();
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
    lines.forEach(function (line, idx) {
      drawText(line.txt, line.posY, line.size, line.align, line.color);
    });
  };
}

function drawText(text, y, size, align, color) {
  // currPos = getCurrPos();
  var posX = gElCanvas.width / 2;
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = 'black';
  gCtx.fillStyle = `${color}`;
  gCtx.font = `${size}px Impact`;
  gCtx.textAlign = `${align}`;
  switch (align) {
    case 'left':
      posX -= 140;
      break;
    case 'center':
      posX = gElCanvas.width / 2;
      break;
    case 'right':
      posX += 140;
      break;
  }
  console.log(gCtx.textAlign);
  gCtx.fillText(text, posX, y);
  gCtx.strokeText(text, posX, y);
}

function onAlignLeft() {
  alignLeft();
  drawImg();
}

function onAlignCenter() {
  alignCenter();
  drawImg();
}

function onAlignRight() {
  alignRight();
  drawImg();
}

function onIncreaseFont() {
  increaseFont();
  drawImg();
}
function onDecreaseFont() {
  decreaseFont();
  drawImg();
}

function onIncreasePos() {
  increasePos();
  drawImg();
}

function ondecreasePos() {
  decreasePos();
  drawImg();
}

function onSwitchLine() {
  switchLine();
  drawImg();
}

function selectImg(elImg) {
  hideAndShow();
  var imgId = elImg.id;
  var img = findImgById(imgId);
  gMeme.selectedImgId = imgId;
  drawImg();
  console.log(gMeme.selectedImgId);
}

function hideAndShow() {
  document.querySelector('.editor-container').style.display = 'flex';
  document.querySelector('.gallery-imgs').style.display = 'none';
}

function initPage() {
  document.querySelector('.editor-container').style.display = 'none';
  document.querySelector('.gallery-imgs').style.display = 'block';
}
