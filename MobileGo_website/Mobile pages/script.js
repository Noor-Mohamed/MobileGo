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
window.onload = function(){
    function toggleDarkMode() {
        const body = document.querySelector('body');
        const details = document.getElementById('table-details')
        const button = document.getElementById('button-dark-mode');
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            button.textContent = 'Dark';
            body.style.backgroundColor = '#ffffff'; // set light mode background color
            body.style.color = '#000000'; // set light mode text color
            body.style.transition = '1s ease'
            details.style.color= '#000000'
        } 
        else {
            body.classList.add('dark');
            button.textContent = 'White';
            body.style.backgroundColor = '#212121'; // set dark mode background color
            body.style.color = '#ffffff'; // set dark mode text color
            body.style.transition = '1s ease'
            details.style.color= '#fff'
        }
    }
    
    document.getElementById('button-dark-mode').addEventListener('click', toggleDarkMode);
}