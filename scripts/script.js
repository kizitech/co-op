const body = document.body;
const navList = document.querySelector("#nav__list")
const toggleBtn = document.querySelector("#checkbox");

const newMember = document.querySelector('#cbx');
const oldMember = document.querySelector('#cbxx');


// TOGGLE BUTTON
function handleClick() {
    body.classList.toggle("active");
}
toggleBtn.addEventListener("click", handleClick);



// JavaScript to make the header sticky
window.addEventListener("scroll", () => {
    const headerNav = document.querySelector(".header__nav");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
        headerNav.classList.add("sticky");
    } else {
        headerNav.classList.remove("sticky");
    }
});



var modal = document.getElementById("myModal");
newMember.addEventListener('change', () => {
    if (newMember.checked) {
        modal.style.display = "block";
    }
})


var formInfo = document.getElementById("form__field-info");
oldMember.addEventListener('change', () => {
    if (oldMember.checked) {
        formInfo.style.display = "block";
    } else {
        formInfo.style.display = "none";
    }
})




newMember.addEventListener('click', function () {
    // If the newMember checkbox is checked, uncheck the oldMember checkbox
    if (newMember.checked) {
        oldMember.checked = false;
        formInfo.style.display = "none";

    }
});

oldMember.addEventListener('click', function () {
    // If the oldMember checkbox is checked, uncheck the newMember checkbox
    if (oldMember.checked) {
        newMember.checked = false;
    }
});