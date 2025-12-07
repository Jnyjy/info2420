// JavaScript Document
PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
  PrintButton1.src = "images/print5.gif"
  PrintButton2.src = "images/print6.gif"
  logo1.src = "images/logo1.jpg"
  logo2.src = "images/logo2.jpg"
}

var imgArray = [
  'Image1Lg.jpg',
  'Image2Lg.jpg',
  'Image3Lg.jpg',
  'Image4Lg.jpg'
];

var titleArray = [
  'Biking Couple',
  'Sunset Couple',
  'Heli-skiing Couple',
  'Motorcycle Couple'
];

var imgPath = "images/Fullsize/"; // <- use lowercase 'images' to match repo

function swapImage(imgID) {
  var theImage = document.getElementById('theImage');
  var textDiv = document.getElementById('bottomText');
  if (!theImage || !textDiv) return;

  var newImg = imgArray[imgID];
  theImage.src = imgPath + newImg;

  var textTitle = titleArray[imgID];
  textDiv.innerHTML = textTitle;
}

function preloadImages() {
  for (var i = 0; i < imgArray.length; i++) {
    var tmpImg = new Image();
    tmpImg.src = imgPath + imgArray[i];
  }
}
