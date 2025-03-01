function numeroAleatorio() {
    alert("Bienvenido al juego de adivinar el número secreto, tienes 3 intentos para adivinar el número secreto del 1 al 10 UwU");

    let numeroAleatorio = Math.floor(Math.random() * 10) + 1; 
    let intentos = 1;

    while (intentos <= 3) {
        let numero = prompt("Digite un número >.<: ");
        numero = parseInt(numero);

        if (numero === numeroAleatorio) {
            alert(`¡Felicidades! Adivinaste el número secreto :D, el número secreto era ${numeroAleatorio}.`);
            return;
        } else if (numero < numeroAleatorio) {
            alert("El número que ingresaste es menor al número secreto :(.");
        } else {
            alert("El número que ingresaste es mayor al número secreto :/.");
        }

        intentos++;
    }

    alert(`Lo siento, no has adivinado el número secreto. Era ${numeroAleatorio} :P`);
}

numeroAleatorio();