//función descuento
function precioConDescuento(precio,desc)
{
    let resultado = (precio * (100 - desc))/100;
    return resultado
}
//interacción con el DOM
function calcularDescuento()
{
    const precio_original = parseFloat(document.getElementById("precio_original").value);
    const descuento = parseFloat(document.getElementById("descuento").value);
    let resultado_final = precioConDescuento(precio_original,descuento);
    const answer = document.getElementById("answer");
    answer.innerText = "Pagarás $" + resultado_final;
}