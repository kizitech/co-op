const body = document.body;
const navList = document.querySelector("#nav__list")
const toggleBtn = document.querySelector("#checkbox");
const newMember = document.querySelector('#cbx');
const oldMember = document.querySelector('#cbxx');

function handleClick() {
   body.classList.toggle("active");
}
toggleBtn.addEventListener("click", handleClick);


newMember.addEventListener('change', () => {
     if (newMember.checked) {
      console.log('clicked');
      oldMember.Disabled;
   }
})

oldMember.addEventListener('change', () => {
     if (newMember.checked) {
      console.log('clicked');
      newMember.prop('disabled', true)
   }
})

   


