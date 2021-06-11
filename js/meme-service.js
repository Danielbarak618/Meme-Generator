'use strict';

const KEY = 'currImg';
var gFontFilter = 'Impact';

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 40,
      align: 'center',
      color: 'white',
      posY: 50,
      font: gFontFilter,
    },
    {
      txt: '',
      size: 40,
      align: 'center',
      color: 'white',
      posY: 270,
      font: gFontFilter,
    },
  ],
};

var gImgs = [
  { id: 1, url: 'meme-img/1.jpg', keywords: ['trump'] },
  { id: 2, url: 'meme-img/2.jpg', keywords: ['dogs ', 'dog'] },
  { id: 3, url: 'meme-img/3.jpg', keywords: ['baby', 'dog'] },
  { id: 4, url: 'meme-img/4.jpg', keywords: ['cat', 'sleep'] },
  { id: 5, url: 'meme-img/5.jpg', keywords: ['kid', 'mad', 'fist'] },
  { id: 6, url: 'meme-img/6.jpg', keywords: ['sience', 'noshit'] },
  { id: 7, url: 'meme-img/7.jpg', keywords: ['surprised', 'baby'] },
  { id: 8, url: 'meme-img/8.jpg', keywords: ['really', 'noshit'] },
  { id: 9, url: 'meme-img/9.jpg', keywords: ['baby', 'laughing', 'devious'] },
  { id: 10, url: 'meme-img/10.jpg', keywords: ['obama', 'black', 'laughing'] },
  { id: 11, url: 'meme-img/11.jpg', keywords: ['black', 'gay', 'happy'] },
  { id: 12, url: 'meme-img/12.jpg', keywords: ['haim', 'zadik'] },
  { id: 13, url: 'meme-img/13.jpg', keywords: ['cheers', 'leonardo'] },
  { id: 14, url: 'meme-img/14.jpg', keywords: ['matrix', 'noshit'] },
  { id: 15, url: 'meme-img/15.jpg', keywords: ['imtellingyou'] },
  { id: 16, url: 'meme-img/16.jpg', keywords: ['noshit', 'laughing'] },
  { id: 17, url: 'meme-img/17.jpg', keywords: ['putin', 'noshit'] },
  { id: 18, url: 'meme-img/18.jpg', keywords: ['oneday'] },
];

function initImages() {
  renderGallery(gImgs);
}

// function getImgsForDisplay() {
//   var imgs = [];
//   return imgs;
// }

function findImgById(imgId) {
  for (var i = 0; i < gImgs.length; i++) {
    var img = gImgs[i];
    if (img.id === imgId) {
      return img;
    }
  }
}

function addLine(posY) {
  var line = {
    txt: '',
    size: 40,
    align: 'center',
    color: 'white',
    posY,
    font: gFontFilter,
  };

  gMeme.lines.push(line);
  gMeme.selectedLineIdx++;
  console.log(gMeme.lines);
  drawImg();
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

function getColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color;
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

function increaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size += 5;
}
function decreaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size -= 5;
}

function increasePos() {
  gMeme.lines[gMeme.selectedLineIdx].posY -= 10;
}

function decreasePos() {
  gMeme.lines[gMeme.selectedLineIdx].posY += 10;
}

function switchLine() {
  const idx = gMeme.selectedLineIdx;
  if (idx >= gMeme.lines.length - 1) gMeme.selectedLineIdx = 0;
  else gMeme.selectedLineIdx++;
  // gMeme.selectedLineIdx = idx === 0 ? 1 : 0;

  const elInput = document.querySelector('input[name="meme-text"]');
  elInput.value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function alignLeft() {
  gMeme.lines[gMeme.selectedLineIdx].align = 'left';
}
function alignCenter() {
  gMeme.lines[gMeme.selectedLineIdx].align = 'center';
}
function alignRight() {
  gMeme.lines[gMeme.selectedLineIdx].align = 'right';
}

function deleteLine() {
  const idx = gMeme.selectedLineIdx;
  if (gMeme.lines.length === 0) return;
  gMeme.lines.splice(idx, 1);
}

function changeFont(val) {
  const idx = gMeme.selectedLineIdx;
  if (val === 'Arial') {
    gMeme.lines[idx].font = `${val}`;
    gFontFilter = val;
  }
  if (val === 'Impact') {
    gMeme.lines[idx].font = `${val}`;
    gFontFilter = val;
  }
  console.log(gMeme.lines);
  // setFontFilter(val);
}

function setFilter(search) {
  gImgs.forEach(function (img) {
    var flag;
    img.keywords.forEach(function (keyword) {
      if (keyword.toLowerCase().startsWith(search.toLowerCase())) {
        flag = true;
      }
      if (flag) {
        img.passedSearch = true;
      } else {
        img.passedSearch = false;
      }
    });
  });
}
