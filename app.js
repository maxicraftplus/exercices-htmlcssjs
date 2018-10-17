window.onscroll = function() {
     sticking();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function sticking() {
     if (window.pageYOffset >= sticky) {
          navbar.className = "sticky";
     }
     else {
          navbar.className = "";
     }
}
