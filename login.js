const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get("imel"));
console.log(urlParams.get("paswot"));

const imel = urlParams.get("imel");
const paswot = urlParams.get("paswot");
console.log(imel.localeCompare(paswot));

if (imel.localeCompare(paswot) != 0) {
  alert("Hello! I am an alert box!!");
}

// const film = document.getElementById("film");
// film.innerHTML = urlParams.get("film");