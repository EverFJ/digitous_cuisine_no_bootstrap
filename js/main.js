function showMenu() {
    let linksBlock = document.getElementById("navlinks");
    
    if (linksBlock.style.display == "none") {
        linksBlock.style.display = "block";
    }
    else {
        linksBlock.style.display = "none"
    }
}