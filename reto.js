function calcularPelis() {
    //dom variables
    const netflix = document.getElementById('netflix');
    const hbomax = document.getElementById('hbomax');
    const amazon = document.getElementById('amazon');
    const disney = document.getElementById('disney+');
    const crunchyroll = document.getElementById('crunchyroll');
    const numPeliculas = document.getElementById('numPeliculas');
    const form = document.getElementById('form');
    //eventlistener
    form.addEventListener('change', function () {
    const ticketPrice = 5;
    let ticketAmount = numPeliculas.value;
    let subscriptionPrice = 0;
        if (netflix.checked) {
            subscriptionPrice += 4.26;
        }
        if (hbomax.checked) {
            subscriptionPrice += 14.99;
        }
        if (amazon.checked) {
            subscriptionPrice += 5;
        }
        if (disney.checked) {
            subscriptionPrice += 7.99;
        }
        if (crunchyroll.checked) {
            subscriptionPrice += 6.2;
        }
        const answer = document.getElementById("respuesta-reto");
        const ticketFinalPrice = ticketAmount * ticketPrice;
        if (ticketFinalPrice > subscriptionPrice) {
            return answer.innerText = "En streming gastarías: $" + subscriptionPrice + " este mes. Mientras que en cine gastarías: $" + ticketFinalPrice + ". Te conviene seguir pagando el streaming.";
        } else {
            return answer.innerText = "En streming gastarías: $" + subscriptionPrice + " este mes. Mientras que en cine gastarías: $" + ticketFinalPrice + ". Te conviene ir al cine.";
        }
        }
    );
}