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

function selectImg(elImg) {
  var imgId = elImg.id;
  var img = findImgById(imgId);
  gMeme.selectedImgId = imgId;
  drawImg();
  console.log(gMeme.selectedImgId);
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
  return gMeme.lines[0].size;
}

function getCurrPos() {
  return gMeme.lines[0].posY;
}

function getLinePos() {
  return gMeme.selectedLineIdx;
}
