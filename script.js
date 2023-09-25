const body = document.body;
const navList = document.querySelector("#nav__list")
const toggleBtn = document.querySelector("#toggle__btn");

function handleClick() {
    body.classList.add("active");
    console.log("greetings")
}

toggleBtn.addEventListener("click", handleClick);