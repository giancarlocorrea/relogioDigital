const relogio = new Relogio();

let _relogio = new Array();

function refresh() {
  document.getElementById("horas").textContent = relogio.horas;
  document.getElementById("minutos").textContent = relogio.minutos;
  document.getElementById("segundos").textContent = relogio.segundos;
}

setInterval(function () {
  let d = new Date()  
  relogio.iniciar(d);
  relogio.tictac(_relogio);
  refresh();
});
