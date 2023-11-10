let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}


// Get the element that contains the unit value
var unitValueElement = document.getElementById("unitValue");

// Create a function to update the multiplied value
function updateMultipliedValue() {
    var unitNumber = parseInt(unitValueElement.textContent);
    var multipliedValue = unitNumber * 20000;
    multipliedValueElement.textContent = "₦" + multipliedValue;
}

// Add an input event listener to the "unitValue" element
unitValueElement.addEventListener("input", updateMultipliedValue);

// Calculate the initial multiplied value
var multipliedValueElement = document.createElement("p");
updateMultipliedValue();

// Insert the new element after the existing one
unitValueElement.parentNode.appendChild(multipliedValueElement);
