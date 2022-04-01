let arrive = new Date("2022-05-28T16:10:00");
setTimer();

setInterval(setTimer, 1000);

setInterval(changeBackground, 5000);

function setTimer() {
    let today = Date.now();
    let difference = arrive - today;
    let day = Math.trunc(difference / 1000 / 60 / 60 / 24);
    difference = difference - (day * 1000 * 60 * 60 * 24);
    let hour = Math.trunc(difference / 1000 / 60 / 60);
    difference = difference - (hour * 1000 * 60 * 60);
    let minute = Math.trunc(difference / 1000 / 60);
    difference = difference - (minute * 1000 * 60);
    let second = Math.trunc(difference / 1000);

    document.querySelector("#day").innerText = day < 10 ? `0${day}` : `${day}`;
    document.querySelector("#hour").innerText = hour < 10 ? `0${hour}` : `${hour}`;
    document.querySelector("#minute").innerText = minute < 10 ? `0${minute}` : `${minute}`;
    document.querySelector("#second").innerText = second < 10 ? `0${second}` : `${second}`;
}

function changeBackground() {
    let actualImage = window.getComputedStyle(document.getElementsByTagName('body')[0]).backgroundImage;
    let num = actualImage.includes('.jpg') ? parseInt(actualImage.substring(actualImage.indexOf('.jpg') - 1, actualImage.indexOf('.jpg'))) : parseInt(actualImage.substring(actualImage.indexOf('.avif') - 1, actualImage.indexOf('.avif')));
    console.log(typeof num);
    let newNum = num === 8 ? 1 : num + 1;
    console.log(newNum);
    let newImage = actualImage.replace("photo-" + num.toString(), "photo-" + newNum.toString());
    console.log(newImage);
    document.body.style.backgroundImage=newImage;
}