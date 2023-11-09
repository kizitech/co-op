// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// IMAGE UPLOADED NOTIFY MODAL
function updateImageStatus() {
    const imageLoader = document.querySelector('.loader');
    const imageStatus = document.getElementById("imageStatus");
    const fileInput = document.getElementById("passport");

    if (fileInput.files.length > 0) {
        imageStatus.innerText = "Upload Successful ✔";
        imageStatus.style.color = "#9E9628";
        imageStatus.style.fontSize = "1.5rem";
        imageLoader.style.display = "none";
    } else {
        imageStatus.innerText = "Please Insert a Passport Image";
    }
}