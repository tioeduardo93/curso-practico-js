function alturaTriangulo(lado, base){
    return Math.sqrt( (lado**2) - ((base/2)**2));
}

function calcularAlturaTriangulo(){
    const lado = document.getElementById("inputLadoTriangulo");

    const valueLado = lado.value;

    const base = document.getElementById("inputBaseTriantulo");

    const valueBase = base.value;

    const altura = alturaTriangulo(valueLado, valueBase);

    alert(altura);
}