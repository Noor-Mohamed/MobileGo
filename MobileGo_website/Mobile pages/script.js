//main pic
var picture = document.querySelector('#pic');

// side pics
var picture1 = document.querySelector('#pic1');
var picture2 = document.querySelector('#pic2');
var picture3 = document.querySelector('#pic3');


// Main pic container
var mainContainer = document.querySelector('#picture');


// list of pictures
picList = [picture1, picture2, picture3]

// Actic pictures
let picActive = 1;

// Add a boxshadow to the active pic
picture1.classList.add('img-active');

// Change the image
function changeImage(imgSrc, n){
    picture.src = imgSrc;

    picList[picActive-1].classList.remove('img-active');

    picList[n-1].classList.add('img-active');

    picActive = n;
}
