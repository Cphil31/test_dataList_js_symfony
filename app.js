document.getElementById("header-searchbar").addEventListener("keyup", function() {
    let filter = document.getElementById("header-searchbar").value.toUpperCase();
    let count = 0;
    if (filter.length > 2) {
        document.getElementById("dropdown").style.display = "block";
    } else {
        document.getElementById("dropdown").style.display = "none";
    }
    let div = document.getElementById("dropdown");
    let a = div.getElementsByTagName("a");
    let txtValue;
    for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
});