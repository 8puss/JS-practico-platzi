//calcular salarios
const salariosCol = colombia.map(
    function (persona) 
    {
        return persona.salary;
    }
);

const salarioSorted = salariosCol.sort(
    function (salario_a, salario_b)
    {
        return salario_a - salario_b;
    }
);

//helpers
function esPar(num)
{
    return (num % 2 === 0);
}

function calcularPromedio(lista)
{
    let len = lista.length;
    const suma_lista = lista.reduce(function (valor_acumulado = 0, nuevo_elemento)
    {
        return valor_acumulado + nuevo_elemento;
    })
    const promedio = suma_lista / len;
    return promedio;
}

//calculadora de mediana
function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) 
    {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad]; 
        const mediana = calcularPromedio([personaMitad1,personaMitad2]);
        return mediana;
    }
    else 
    {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//mediana gral
const medianaGralCol = medianaSalarios(salarioSorted);

//mediana del top 10%

const spliceStart = (salarioSorted.length * (100 - 10))/100;
const spliceCount = salarioSorted.length - spliceStart;
const salariosColTop10 = salarioSorted.splice(spliceStart,spliceCount);

const medianaTop10 = medianaSalarios(salariosColTop10);
console.log({medianaGralCol, medianaTop10});