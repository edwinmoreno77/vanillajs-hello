/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateExcuse(); // Llama a la función para generar una excusa al cargar la página

  // Agrega un listener al botón para generar una nueva excusa cuando se haga clic
  document
    .getElementById("generateExcuseBtn")
    .addEventListener("click", generateExcuse);
};

function generateExcuse() {
  let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let action = ["se comió", "orinó en", "aplastó", "rompió"];
  let what = ["mi tarea", "mi teléfono", "el auto"];
  let when = [
    "antes de la clase",
    "mientras dormía",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  // Generar índices aleatorios para cada arreglo
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  // Construir la excusa
  let excuse =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];

  // Mostrar la excusa en el elemento con id "excuse"
  document.getElementById("excuse").innerHTML = excuse;
}
