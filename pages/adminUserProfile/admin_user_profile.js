// Parse the 'id' query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const userId = parseInt(urlParams.get('id'));

// Find the user data based on the 'userId'
const user = usersData.find(user => user.id === userId);

if (user) {
    // Populate the user profile page with user-specific data
    document.getElementById('avatar').src = user.image;
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-mda').textContent = user.mda;
    document.getElementById('user-email').textContent = user.email;

    // Set the page title to the user's name
    document.title = `CO-OP Financial Services — ${user.name}`;
} else {
    // Handle the case where the user with the specified 'id' is not found
    // You can display a message or redirect to an error page.
}