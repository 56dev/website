let sw = document.getElementById("theme-select");
sw.addEventListener("change", function(event) {
    document.getElementsByTagName("body")[0].id = sw.value;

})
