$(document).ready(function () {

    $('#datatable').dataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],

        createdRow: function (row, data, dataIndex) {
            var tdElements = $('td', row);

            tdElements.each(function (index) {
                var columnHeaderText = $('#datatable thead th').eq(index).text();
                $(this).attr('data-label', columnHeaderText);
            });
        }
    });

});



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
