const selectSteaks = document.getElementById("headingOne");
const porkChops = document.getElementById("headingTwo");
const sirloinSteak = document.getElementById("headingThree");
const sausage = document.getElementById("headingFour");
const chicken = document.getElementById("headingFive");
const bacon = document.getElementById("headingSix");

[selectSteaks, porkChops, sirloinSteak, sausage, chicken, bacon].forEach(item => {
    item.addEventListener('click', event => {
        removeActive();
    })
})

function removeActive(){
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.classList.remove('active');
    })   
}

selectSteaks.addEventListener('click', activeSteaks);
function activeSteaks(){
    document.getElementById("selectSteaks").classList.add("active");
}

porkChops.addEventListener('click', activePork);
function activePork(){
    document.getElementById("porkChops").classList.add("active");
}

sirloinSteak.addEventListener('click', activeSteak);
function activeSteak(){
    document.getElementById("sirloinSteak").classList.add("active");
}

sausage.addEventListener('click', activeSausage);
function activeSausage(){
    document.getElementById("sausage").classList.add("active");
}

chicken.addEventListener('click', activeChicken);
function activeChicken(){
    document.getElementById("chicken").classList.add("active");
}

bacon.addEventListener('click', activeBacon);
function activeBacon(){
    document.getElementById("bacon").classList.add("active");
}