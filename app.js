const p1 = document.getElementById("p1");
const b1 = document.getElementById("b1");
const tabMonth = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

b1.addEventListener("click", function() {
    const date = new Date();
    const currentDate = date.getDate() + " " + tabMonth[date.getMonth()] + " " + date.getFullYear();
    p1.innerHTML += currentDate + "<br>";
});