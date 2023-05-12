const piedra = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const tijera = document.querySelector(".tijera");
const resultado = document.querySelector(".resultado");
const arr = [piedra, papel, tijera];
const options = ["piedra", "papel", "tijera"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

arr.forEach(function (element) {
  element.addEventListener("click", function () {
    seleccionar(element.className);
  });
});

function seleccionar(element) {
  seleccionarPC(element);
}

function seleccionarPC(eleccion) {
  const pcEleccion = options[getRandomInt(3)];
  if (eleccion !== pcEleccion) {
    if (
      (eleccion === "piedra" && pcEleccion === "tijera") ||
      (eleccion === "papel" && pcEleccion === "piedra") ||
      (eleccion === "tijera" && pcEleccion === "papel")
    ) {
      resultado.innerHTML = `Ganaste🎉<br> Tu eleccion fue ${eleccion} y el del oponente fue ${pcEleccion}. `;
      resultado.classList.remove("inactive");
    } else {
      resultado.innerHTML = `Perdiste😢<br> Tu eleccion fue ${eleccion} y el del oponente fue ${pcEleccion}. `;
      resultado.classList.remove("inactive");
    }
  } else {
    resultado.innerHTML = `Empataste🤝<br> Tu eleccion fue ${eleccion} y el del oponente fue ${pcEleccion}. `;
    resultado.classList.remove("inactive");
  }
}
