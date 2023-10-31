new DataTable('#example', {
    dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ],

    ajax: '/pages/shares/shares.json',
    columns: [
        { data: 'name of shareholder' },
        { data: 'value of holdings' },
        { data: 'share holdings (units)' },
        { data: '% of holding' },
    ],
    createdRow: function (row, data, dataIndex) {
        var tdElements = $('td', row);

        // Loop through the td elements and set the data-label attribute
        tdElements.each(function (index) {
            var columnHeaderText = $('#example thead th').eq(index).text();
            $(this).attr('data-label', columnHeaderText);
        });
    }
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
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
}

