const dateContainer = document.querySelector('.new-date');
let newDate = new Date();
dateContainer.innerHTML = newDate.toTimeString();
let bagImages = [
    "url('images/churtch.jfif')",
    "url('images/island.jfif')",
    "url('images/cloud.jfif')",
    "url('images/darkroom.jfif')"
]
let slide = document.querySelector('#page .container #main-section .first-section');

let buttons = document.querySelectorAll('span.button');
for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        buttons.forEach(function(button){
            button.classList.remove('active');
        });
        for(let j = 0; j<bagImages.length; j++){
            if(i == j){
                slide.style.backgroundImage = bagImages[i];
                buttons[i].classList.add('active')
            }
        }
})
}