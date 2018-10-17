const p1 = document.getElementById("p1");
const tabMonth = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

function showDate() {
    const date = new Date();
    const currentDate = date.getDate() + " " + tabMonth[date.getMonth()] + " " + date.getFullYear();
    p1.innerHTML += currentDate + "<br>";
}