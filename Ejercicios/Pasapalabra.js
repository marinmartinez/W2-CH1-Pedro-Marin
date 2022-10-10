import { questions } from "./Preguntas.js";

class Pasapalabra {
    constructor(array) {
        this.array = array;
    }

    ImprimePasapalabra() {
        this.array.forEach((element) => {
            console.log(element);
        });
    }
}
const pasapalabra = new Pasapalabra(questions);
pasapalabra.ImprimePasapalabra();
