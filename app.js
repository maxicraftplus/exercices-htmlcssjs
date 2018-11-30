const btsAccordion = document.getElementsByClassName("accordion");

for (let i = 0; i < btsAccordion.length; i++) {
    const bt = btsAccordion[i];
    bt.addEventListener("click", function() {
       bt.classList.toggle("active");
       const panel = bt.nextElementSibling;
       if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
       } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
       }
    }); 
}

function toggleAccordion() {
}