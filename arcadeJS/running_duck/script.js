const road = document.querySelectorAll('#grid > div');
const scorEl = document.querySelector('#score');

const duckIdx = 1;
const duck = road[duckIdx];
duck.classList.add('duck');

let speed = 200;
let score = 0

function addPlant() {
    let currentPlantIdx = road.length - 1;
    road[currentPlantIdx].classList.add('plant');

    const plantIntVal = setInterval(function () {
        score++;
        scorEl.innerText = score;

        if (score % 50 === 0) {
            speed = speed - 20;
        }

        road[currentPlantIdx].classList.remove('plant');
        currentPlantIdx--;

        if (currentPlantIdx < 0) {
            clearInterval(plantIntVal);
            addPlant();
            return;
        }

        if (currentPlantIdx === duckIdx && !road[currentPlantIdx].classList.contains('duck-jump')) {
            showAlert('CRASH!');
            clearInterval(plantIntVal);
            road[currentPlantIdx].classList.remove('duck');
            road[currentPlantIdx].classList.add('plant');
            return;
        }

        road[currentPlantIdx].classList.add('plant');
    }, speed);
}

addPlant();

function jump(event) {
    if (event.code === 'Space' && !event.repeat) {
        duck.classList.add('duck-jump');
        setTimeout(function () {
            duck.classList.remove('duck-jump');
        }, 300);

    }
}

document.addEventListener('keydown', jump);

const restartButton=document.getElementById('restart');

restartButton.addEventListener('click',function(){
    window.location.reload();
})