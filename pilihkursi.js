const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const kursi = document.getElementById("kursiTerpilih");
kursi.value = urlParams.get("kursi");

const finfil = document.getElementById("finalFilm");
finfil.value = urlParams.get("btn1") || urlParams.get("btn2") || urlParams.get("btn3") || urlParams.get("btn4") || urlParams.get("btn5") || urlParams.get("btn6");