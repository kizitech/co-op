// PREVIOUS PAGE
const previousPage = document.querySelector("#go-back");

function goBack() {
    window.history.go(-1);
}
previousPage.addEventListener("click", goBack);

