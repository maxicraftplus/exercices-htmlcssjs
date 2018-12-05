function openCity(cityName, bt, color) {
     let i, tabcontents, tablinks;

     tabcontents = document.getElementsByClassName("tabcontent");
     for (i = 0; tabcontents.length > i; i++) {
          tabcontents[i].style.display = "none";
     }

     tablinks = document.getElementsByClassName("tablink");
     for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
     }

     document.getElementById(cityName).style.display = "block";
     bt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();