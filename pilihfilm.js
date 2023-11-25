const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get("btn1"));
console.log(urlParams.get("btn2"));
console.log(urlParams.get("btn3"));
console.log(urlParams.get("btn4"));
console.log(urlParams.get("btn5"));
console.log(urlParams.get("btn6"));

const filmTerpilih = document.getElementById("filmTerpilih");
filmTerpilih.innerHTML =  urlParams.get("btn1") || urlParams.get("btn2") || urlParams.get("btn3") || urlParams.get("btn4") || urlParams.get("btn5") || urlParams.get("btn6");