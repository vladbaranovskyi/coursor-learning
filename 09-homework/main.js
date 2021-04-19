const body = document.body
const qButton = document.getElementById('button-q');
const wButton = document.getElementById('button-w');
const eButton = document.getElementById('button-e');
const rButton = document.getElementById('button-r');
const tButton = document.getElementById('button-t');
const firstSound = document.getElementById('sound-1');
const secondSound = document.getElementById('sound-2');
const thirdSound = document.getElementById('sound-3');
const fourthSound = document.getElementById('sound-4');
const fifthSound = document.getElementById('sound-5');

body.addEventListener('click', function(e){

    if (e.target === qButton){
        firstSound.play();
    } else if (e.target === wButton){
        secondSound.play();
    } else if (e.target === eButton){
        thirdSound.play();
    } else if (e.target === rButton){
        fourthSound.play();
    } else if (e.target === tButton) {
        fifthSound.play();
    }
});

body.addEventListener('keydown', function (e){

    if (e.keyCode === 81){
        firstSound.play();
    } else if (e.keyCode === 87){
        secondSound.play();
    } else if (e.keyCode === 69){
        thirdSound.play();
    } else if (e.keyCode === 82){
        fourthSound.play();
    } else if (e.keyCode === 84) {
        fifthSound.play();
    }
});