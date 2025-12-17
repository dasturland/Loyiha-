function hisobla() {
let son = document.getElementById("numberInput").value;
let result = document.getElementById("result");


if (son === "") {
result.innerHTML = "Iltimos, son kiriting!";
result.style.color = "red";
} else {
let kvadrat = son * son;
result.innerHTML = "Kiritilgan sonning kvadrati: " + kvadrat;
result.style.color = "green";
}
}