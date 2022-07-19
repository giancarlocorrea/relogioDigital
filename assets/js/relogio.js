class Relogio {
  constructor() {

  }

  iniciar(data) {
    this.dia = data.getDay();
    this.horas = data.getHours();
    this.minutos = data.getMinutes();
    this.segundos = data.getSeconds();
  }

  tictac(arr) {
    arr[0] = this.horas;
    arr[1] = this.minutos;
    arr[2] = this.segundos;

    for (let i = 0; i <= 2; i++) {
      if (arr[i] < 10) arr[i] = "0" + arr[i];
    }

    this.horas = arr[0];
    this.minutos = arr[1];
    this.segundos = arr[2];
  }
}
