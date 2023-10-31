// Get the terms
var terms = document.getElementById("terms");

// Get the <close> element that closes the terms
var close = document.getElementById("terms-close__btn");
var acceptsTerms = document.getElementById("accepts__terms-close__btn");

var termsConditions = document.getElementById("terms-and-conditions")
termsConditions.addEventListener("click", () => {
    terms.style.display = "flex";
    console.log("I'm getting")
})

// When the user clicks on <close> (x), close the terms
close.onclick = function () {
    terms.style.display = "none";
}

acceptsTerms.onclick = function () {
    terms.style.display = "none";
}

// When the user clicks anywhere outside of the terms, close it
window.onclick = function (event) {
    if (event.target == terms) {
        terms.style.display = "none";
    }
}

// Get references to the button and the checkbox
var acceptButton = document.getElementById("accepts__terms-close__btn");
var checkbox = document.getElementById("cbxxx");

// Add a click event listener to the button
acceptButton.addEventListener("click", function () {
    // Check the checkbox
    checkbox.checked = true;
});