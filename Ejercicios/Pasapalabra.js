import { questions } from "./preguntas.js";

class Pasapalabra {
    constructor(array) {
        this.array = array;
    }

    PrintPasapalabra() {
        this.array.forEach((element) => {
            alert(element.question);
        });
    }

    CompareAnswer(respuesta, index) {
        if (
            respuesta.toUpperCase() === this.array[index].answer.toUpperCase()
        ) {
            this.array[index].status = 1;
            alert(`Correcto la respuesta era  ${this.array[index].answer}`);
            return 1;
        }
        if (respuesta.toLowerCase() === "pasapalabra") {
            alert("pasapalabra entonces");
            return 0;
        }
        alert("Incorrecto");
        this.array[index].status = -1;
        return 1;
    }

    CheckFinalStatus() {
        length;
        this.array.forEach((element) => {
            if (element.status === 0) {
                return false;
            }
        });
    }

    StartGame() {
        let i = 0;

        for (let x = 0; x < this.array.length; i++) {
            if (this.array[i].status === 0) {
                alert(this.array[i].question);
                let respuesta = prompt("Introduce Tu Respuesta ");
                alert(respuesta.length);
                if (respuesta.length === 0 || respuesta === null) {
                    respuesta = "a";
                }
                x += this.CompareAnswer(respuesta, i);
                if (i === this.array.length - 1) {
                    i = 0;
                }
            }
            if (this.CheckFinalStatus() === true) {
                x = this.array.length;
            }
        }
    }
}
const pasapalabra = new Pasapalabra(questions);
pasapalabra.StartGame();
