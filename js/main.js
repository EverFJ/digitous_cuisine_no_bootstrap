function showMenu() {
    let linksBlock = document.getElementById("navlinks");

    if (linksBlock.style.display == "block") {
        linksBlock.style.display = "none";
    } else {
        linksBlock.style.display = "block";
    }
}