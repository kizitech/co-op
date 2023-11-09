// Get the transaction time
const transactionTimeElement = document.getElementById("transaction-time");

// Create a new Date object to get the current date and time
const currentDate = new Date();

// Format the date and time as a string
const transactionTime = currentDate.toLocaleString();

// Update the content of the "transaction-card__text-description" element
transactionTimeElement.textContent = transactionTime;



// Function to calculate and display share holding amount
function calculateShareHoldingAmount() {
    const sharesInput = document.getElementById("shares-units");
    const shareHoldingAmountElement = document.getElementById("share-amount");

    // Get the value from the "shares" input field
    const shares = parseFloat(sharesInput.value);

    if (shares) {
        const shareHoldingAmount = shares * 200000;
        shareHoldingAmountElement.textContent = "₦" + shareHoldingAmount;
    }
}

// Add an event listener to the "shares" input field
const sharesInput = document.getElementById("shares-units");
sharesInput.addEventListener("input", calculateShareHoldingAmount);