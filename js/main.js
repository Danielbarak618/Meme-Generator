'use strict';

var gElCanvas;
var gCtx;
var gImg = getImg();
var currPos = 50;

var currLine = getLinePos();

function onInit() {
  gElCanvas = document.querySelector('.my-canvas');
  gCtx = gElCanvas.getContext('2d');
  resizeCanvas();
  drawImg();
  setFilter('');
  initImages();
  initPage();
}

function renderGallery() {
  var imgs = getImg();
  var strHtml = '';
  imgs.forEach(function (img, idx) {
    if (img.passedSearch) {
      strHtml += `<img src="${img.url}" id="${img.id}" class="img-item" onclick="selectImg(this)"</img>`;
    }
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
      drawText(
        line.txt,
        line.posY,
        line.size,
        line.align,
        line.color,
        line.font,
        idx
      );
    });
  };
}

function onImgInput(ev) {
  loadImageFromInput(ev, drawImg);
}

function loadImageFromInput(ev, onImageReady) {
  document.querySelector('.share-container').innerHTML = '';
  var reader = new FileReader();

  reader.onload = function (event) {
    console.log('event:', event);
    var img = new Image();
    img.onload = onImageReady.bind(null, img);
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
      var lines = getLines();
      lines.forEach(function (line, idx) {
        drawText(
          line.txt,
          line.posY,
          line.size,
          line.align,
          line.color,
          line.font,
          idx
        );
      });
    };
    img.src = event.target.result;
    gImg = img;
  };
  reader.readAsDataURL(ev.target.files[0]);
}

function drawText(text, y, size, align, color, font, idx) {
  // currPos = getCurrPos();
  const selectedLine = getLinePos();
  var posX = gElCanvas.width / 2;
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = 'black';
  gCtx.fillStyle = `${color}`;
  gCtx.font = `${size}px ${font}`;
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
  if (selectedLine === idx) {
    gCtx.strokeRect(30, y - size - 5, gElCanvas.width - 60, 20 + size);
  }
}

function onAddLine() {
  currPos = gElCanvas.width / 2;
  addLine(currPos);
  drawImg();
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
  document.querySelector('.main-page').style.display = 'none';
}

function initPage() {
  document.querySelector('.editor-container').style.display = 'none';
  document.querySelector('.main-page').style.display = 'block';
}

function downloadCanvas(elLink) {
  const data = gElCanvas.toDataURL();
  elLink.href = data;
  elLink.download = 'my-img.jpg';
}

function onDeleteLine() {
  deleteLine();
  drawImg();
}

function onSetFont(font) {
  changeFont(font);
  drawImg();
}

function onSetFilter(filter) {
  setFilter(filter);
  renderGallery();
}

function resizeCanvas() {
  const elContainer = document.querySelector('.my-canvas');
  gElCanvas.width = elContainer.offsetWidth;
  gElCanvas.height = elContainer.offsetHeight;
}

function toggleMenu() {
  document.body.classList.toggle('menu-open');
}
