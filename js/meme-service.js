'use strict';

const KEY = 'currImg';

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 40,
      align: 'left',
      color: 'white',
      posY: 100,
    },
    {
      txt: '',
      size: 40,
      align: 'left',
      color: 'white',
      posY: 380,
    },
  ],
};

var gImgs = [
  { id: 1, url: 'meme-img/1.jpg', keywords: ['happy'] },
  { id: 2, url: 'meme-img/2.jpg', keywords: ['happy'] },
  { id: 3, url: 'meme-img/3.jpg', keywords: ['happy'] },
];

function initImages() {
  renderGallery(gImgs);
}

function getImgsForDisplay() {
  var imgs = [];
  return imgs;
}

function findImgById(imgId) {
  for (var i = 0; i < gImgs.length; i++) {
    var img = gImgs[i];
    if (img.id === imgId) {
      return img;
    }
  }
}

function getImg() {
  return gImgs;
}

function getLines() {
  return gMeme.lines;
}

function getText(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt;
  drawImg();
}

function getFontSize() {
  return gMeme.lines[gMeme.selectedLineIdx].size;
}

function getCurrPos() {
  return gMeme.lines[gMeme.selectedLineIdx].posY;
}

function getLinePos() {
  return gMeme.selectedLineIdx;
}

function increasePos() {
  gMeme.lines[gMeme.selectedLineIdx].posY += 10;
}

function decreasePos() {
  gMeme.lines[gMeme.selectedLineIdx].posY -= 10;
}

function switchLine() {
  gMeme.selectedLineIdx++;
  if (gMeme.selectedLineIdx > gMeme.lines.length) {
    gMeme.selectedLineIdx = 0;
  }
}
