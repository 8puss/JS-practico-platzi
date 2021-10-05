//calcular el promedio de una lista
function calcularPromedio(lista)
{
    /* let sumarLista = 0;

    for (let i = 0; i < len; i++)
    {
        sumarLista += array[i];
    } */
    let len = lista.length;
    const suma_lista = lista.reduce(function (valor_acumulado = 0, nuevo_elemento)
    {
        return valor_acumulado + nuevo_elemento;
    })
    const promedio = suma_lista / len;
    return promedio;
}


//calcular mediana de una lista
function calcularMediana(lista) {
    lista.sort((a, b) => a - b);
    const len = lista.length;
    const mitad_lista = parseInt(len / 2);
    function es_par(numero) 
    {
    if (numero % 2 === 0) 
    {
        return true;
    }
    else
    {
        return false;
    }    
    }
    let mediana;
    if (es_par(len))
    {
        const elemento1 = lista[mitad_lista - 1];
        const elemento2 = lista[mitad_lista];

        const promedio1y2 = calcularPromedio([elemento1,elemento2]);
        mediana = promedio1y2;
        return mediana;
    }
    else
    {
        mediana = lista[mitad_lista];
        return mediana;
    }
}

//calcular moda
function calcularModa(lista) {
    const lista1Count = {};
    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
        }
    );
    const lista_r = Object.entries(lista1Count).sort(
        function (valor_acumulado, nuevo_valor) {
            return valor_acumulado[1] - nuevo_valor[1];
        }
    )
    
    const moda = lista_r[lista_r.length - 1];
    return moda;
}

// interactuar con HTML
function media_DOM() {
    let input_media = document.getElementById("media").value;
    let media_array = Array.from(input_media.split(','), Number);
    const resultado = calcularPromedio(media_array);
    const answer = document.getElementById("respuesta_media");
    answer.innerText = "Media: " + resultado;
}

function moda_DOM() {
    let input_moda = document.getElementById("moda").value;
    let moda_array = Array.from(input_moda.split(','), Number);
    const resultado = calcularModa(moda_array);
    const answer = document.getElementById("respuesta_moda");
    answer.innerText = "Moda: " + resultado;
}

function mediana_DOM() {
    let input_mediana = document.getElementById("mediana").value;
    let mediana_array = Array.from(input_mediana.split(','), Number);   
    const resultado = calcularMediana(mediana_array);
    const answer = document.getElementById("respuesta_mediana");
    answer.innerText = "Mediana: " + resultado;
}