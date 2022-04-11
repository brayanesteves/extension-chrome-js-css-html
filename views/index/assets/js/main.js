//const amountController = document.querySelector("#mainArea").querySelector('.responsive-area').querySelector("#ratesChartsContainer > div.charttab-div > div");
const amountController = document.querySelector(".trading-module-container");

const fechaComoCadena = new Date(); // día lunes
const dias = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
const numeroDia = new Date(fechaComoCadena).getDay();
const nombreDia = dias[numeroDia];
if (nombreDia == "lunes") {
    amountController.style.display = "none";
    console.log(amountController);
}
console.log("Nombre de día de la semana: ", nombreDia);