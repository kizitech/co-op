let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});


document.addEventListener('DOMContentLoaded', function () {
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');

    // Retrieve the user's preferred view from local storage, if it exists
    var userViewPreference = localStorage.getItem('viewPreference');

    if (userViewPreference === 'list') {
        // User prefers list view
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
    } else if (userViewPreference === 'grid') {
        // User prefers grid view
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
    }

    listView.addEventListener('click', function () {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
        // Store the user's preference in local storage
        localStorage.setItem('viewPreference', 'list');
    });

    gridView.addEventListener('click', function () {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
        // Store the user's preference in local storage
        localStorage.setItem('viewPreference', 'grid');
    });
});




function userSearch() {
    const searchInput = document.getElementById("user-search-input");
    const searchTerm = searchInput.value.toLowerCase();
    const userBoxes = document.querySelectorAll(".project-box-wrapper");

    userBoxes.forEach((userBox) => {
        const userName = userBox.querySelector("#user-name").textContent.toLowerCase();
        const userMda = userBox.querySelector(".team-member-name p").textContent.toLowerCase();
        if (userName.includes(searchTerm) || userMda.includes(searchTerm)) {
            userBox.style.display = "block";
        } else {
            userBox.style.display = "none";
        }
    });
}
