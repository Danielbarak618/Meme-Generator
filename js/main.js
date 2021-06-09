'use strict';

var text_title = 'ALALALA';

var gElCanvas;
var gCtx;
var gImg = getImg();

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
    console.log(lines[0].txt);
    drawText(lines[0].txt, 100, 100);
  };
}

function drawText(text, x, y) {
  console.log(text);
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = 'black';
  gCtx.fillStyle = 'white';
  gCtx.font = '40px Impact';
  gCtx.textAlign = 'center';
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}
