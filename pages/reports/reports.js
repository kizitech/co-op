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

window.onload = function () {
    Array.from(
        document.getElementsByClassName("report-collapse-trigger")
    ).forEach(function (item) {
        item.addEventListener("click", function (e) {
            var _btn = this;
            console.log(_btn.parentNode.parentNode.classList.contains("open"));
            if (_btn.parentNode.parentNode.classList.contains("open")) {
                _btn.parentNode.parentNode.classList.remove("open");
            } else {
                _btn.parentNode.parentNode.classList.add("open");
            }
        });
    });
};
