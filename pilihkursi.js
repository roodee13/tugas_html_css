const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get("film"));

const film = document.getElementById("film");
film.innerHTML = urlParams.get("film");