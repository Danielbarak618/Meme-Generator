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
      posY: 200,
    },
  ],
};

var gImgs = [
  { id: 1, url: 'meme-img/1.jpg', keywords: ['happy'] },
  { id: 2, url: 'meme-img/2.jpg', keywords: ['happy'] },
  { id: 3, url: 'meme-img/3.jpg', keywords: ['happy'] },
  { id: 4, url: 'meme-img/4.jpg', keywords: ['happy'] },
  { id: 5, url: 'meme-img/5.jpg', keywords: ['happy'] },
  { id: 6, url: 'meme-img/6.jpg', keywords: ['happy'] },
  { id: 7, url: 'meme-img/7.jpg', keywords: ['happy'] },
  { id: 8, url: 'meme-img/8.jpg', keywords: ['happy'] },
  { id: 9, url: 'meme-img/9.jpg', keywords: ['happy'] },
  { id: 10, url: 'meme-img/10.jpg', keywords: ['happy'] },
  { id: 11, url: 'meme-img/11.jpg', keywords: ['happy'] },
  { id: 12, url: 'meme-img/12.jpg', keywords: ['happy'] },
  { id: 13, url: 'meme-img/13.jpg', keywords: ['happy'] },
  { id: 14, url: 'meme-img/14.jpg', keywords: ['happy'] },
  { id: 15, url: 'meme-img/15.jpg', keywords: ['happy'] },
  { id: 16, url: 'meme-img/16.jpg', keywords: ['happy'] },
  { id: 17, url: 'meme-img/17.jpg', keywords: ['happy'] },
  { id: 18, url: 'meme-img/18.jpg', keywords: ['happy'] },
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

// function moveLineUp(){
//   gMeme.lines[]
// }

function switchLine() {
  const idx = gMeme.selectedLineIdx;
  gMeme.selectedLineIdx = idx === 0 ? 1 : 0;
  const elInput = document.querySelector('input[name="meme-text"]');
  elInput.value = gMeme.lines[gMeme.selectedLineIdx].txt;
}
