const pages = [
    document.getElementById("page-accueil"),
    document.getElementById("page-presentation"),
    document.getElementById("page-contact"),
];

function openPage(button) {
    document.querySelectorAll("#tabs button")
        .forEach(
            function(bt) {
                bt.className = "";
            } 
        );
    button.className = "active";

    for (let page of pages) {
        page.style.display = "none";
    }

    switch (button.textContent) {
        case "Accueil":
            pages[0].style.display = "block"; 
            break;
        case "Présentation":
            pages[1].style.display = "block";
            break;
        case "Contact":
            pages[2].style.display = "block";
            break;
    }
}
