
//codigo del cuadrado
function perimetro_cuadrado(lado) 
{ 
    let perimetro_cuadrado = lado * 4;
    //console.log("El perímetro del cuadrado es: " + perimetro_cuadrado + " u");
    return perimetro_cuadrado;
}

function area_cuadrado(lado) 
{
    let area_cuadrado = lado * lado;
    //console.log("El área del cuadrado es: " + area_cuadrado + " u^2");
    return area_cuadrado
}

//codigo del triangulo
function perimetro_triangulo(lado1, lado2, base)
{
    let perimetro_triangulo = lado1 + lado2 + base;
    //console.log("El perímetro del triángulo es: " + perimetro_triangulo + " u");
    return perimetro_triangulo;
}

function area_triangulo(base, altura)
{
    return (base * altura)/2;
    //console.log("El perímetro del triángulo es: " + area_triangulo + " u^2");
}

//codigo circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio ** 2;

//interactuar con html
//cuadrado
function calcularPerimetroCuadrado() 
{
    let input = document.getElementById("inputCuadrado");
    let value = input.value;
    let perimetro = perimetro_cuadrado(value);
    const respuesta = document.getElementById("cuadrado_respuesta");
    respuesta.innerText = "Perímetro: " + perimetro + "u";
}
function calcularAreaCuadrado() 
{
    let input = document.getElementById("inputCuadrado");
    let value = input.value;
    let area = area_cuadrado(value);
    const respuesta = document.getElementById("cuadrado_respuesta");
    respuesta.innerText = "Área: " + area + "u^2";
}

//triangulo
function calcularAlturaTriangulo(lado1,lado2,base)
{
    const lado_a = parseFloat(document.getElementById("lado1").value);
    const lado_b = parseFloat(document.getElementById("lado2").value);
    const base_1 = parseFloat(document.getElementById("base").value);
    const base_2 = base_1 / 2
    if (lado_a === lado_b && base != lado_a) {
        const altura = Math.sqrt((lado_a**2)-(base_2**2));
        return altura
    } else {
        alert("No es un triángulo isóseles");        
    }
}
function calcularPerimetroTriangulo(lado1,lado2,base)
{
    const lado_a = parseFloat(document.getElementById("lado1").value);
    const lado_b = parseFloat(document.getElementById("lado2").value);
    const base_1 = parseFloat(document.getElementById("base").value);
    const resultado = perimetro_triangulo(lado_a, lado_b, base_1);
    const respuesta = document.getElementById("triangulo_respuesta");
    respuesta.innerText = "Perímetro: " + resultado + "u";
}
function calcularAreaTriangulo(base,altura) 
{
    const base_1 = parseFloat(document.getElementById("base").value);
    const altura_1 = calcularAlturaTriangulo();
    const resultado = area_triangulo(base_1, altura_1);
    const respuesta = document.getElementById("triangulo_respuesta");
    respuesta.innerText = "Área: " + resultado + "u^2";
}

//circulo
function calcularPerimetroCirculo(radio) 
{
    const radioC = parseFloat(document.getElementById("radio").value);
    const cPerimetro= perimetroCirculo(radioC);
    const respuesta = document.getElementById("circulo_respuesta");
    respuesta.innerText = "Perímetro: " + cPerimetro + "u";
}
function calcularAreaCirculo(radio) {
    const radio_1 = parseFloat(document.getElementById("radio").value);
    const cArea = areaCirculo(radio_1);
    const respuesta = document.getElementById("circulo_respuesta");
    respuesta.innerText = "Área: " + cArea + "u^2";
}