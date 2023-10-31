// Get the forgotModal and buttons
const forgotModal = document.querySelector(".forgot__modal");
const forgotOpenModalButton = document.getElementById("forgotOpenModal");
const closeModalButton = document.getElementById("closeModal");

// When the user clicks the "Forgot number?" link, open the forgotModal
forgotOpenModalButton.addEventListener("click", function () {
    forgotModal.style.display = "block";
});

// When the user clicks the close button or anywhere outside the forgotModal, close the forgotModal
closeModalButton.addEventListener("click", function () {
    forgotModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == forgotModal) {
        forgotModal.style.display = "none";
    }
});

// Handle the form submission
const submitButton = document.getElementById("submitEmail");
const emailInput = document.getElementById("emailInput");

submitButton.addEventListener("click", function () {
    const email = emailInput.value;
    // You can add your own code here to handle the email input, e.g., send it to a server.
    // For this example, we'll just close the forgotModal.
    forgotModal.style.display = "none";
});
