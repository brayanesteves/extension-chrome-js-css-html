const fechaComoCadena = new Date();
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
    alert(nombreDia);
}
console.log("Nombre de día de la semana: ", nombreDia);