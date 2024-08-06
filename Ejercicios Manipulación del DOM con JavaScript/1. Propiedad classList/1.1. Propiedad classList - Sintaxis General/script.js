const element = document.getElementById('myElements')

const class3 = element.classList.contains('class3');

if (class3) {
    console.log("La clase 3 se encuentra presente");
} else {
    console.log("La clase 3 NO esta presente")
}

const class4 = element.classList.contains('class4');

if (class4) {
    console.log("La clase 4 se encuentra presente");
} else {
    console.log("La clase 4 NO esta presente")
}