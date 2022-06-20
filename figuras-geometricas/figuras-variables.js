//CÓDIGO PARA EL CUADRADO

function perimetroCuadrado (lado){
   return lado*4;
} 

function areaCuadrado (lado){
    return lado * lado;
} 

//CÓDIGO PARA EL TRIÁNGULO

function perimetroTriangulo (lado1, lado2, base){
   return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo (base, altura){
   return base * altura /2;
}

//CÓDIGO PARA EL CÍRCULO

const PI = Math.PI; //el valor de PI

function diametroCirculo (radio){
    return radio * 2;
}

function circunferencia (radio){

    const diametro = diametroCirculo(radio); 
    return PI * diametro;
}  

function areaCirculo(radio){
   return PI * radio * radio;
} 

//AQUI INTERACTUAMOS CON EL HTML

//cuadrado

function calcularPerimetroCuadrado(){
    const lado = document.getElementById("inputCuadrado"); //aqui mandamos a llamar el elemento con el id "inputCuadrado"
    
    const value = lado.value; //llamamos al valor de la const "lado", que se encuentra justo arriba

    const perimetro = perimetroCuadrado(value); //utilizamos la funcion "perimetroCuadrado" y le damos como parametro el valor de "value"

    alert(perimetro); //envia un mensaje a la pantalla con el valor que deseamos
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    
    const valueLado = input.value;

    const area = areaCuadrado(valueLado);

    alert(area);
}

//triángulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputTrianguloLado1");

    const value1 = lado1.value;

    const lado2 = document.getElementById("inputTrianguloLado2");

    const value2 = lado2.value;

    const base = document.getElementById("inputTrianguloBase");

    const valueBase = base.value;

    const perimetro = perimetroTriangulo(value1, value2, valueBase);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputTrianguloBase");

    const valueBase = base.value;

    const altura = document.getElementById("inputTrianguloAltura");

    const valueAltura = altura.value;

    const area = areaTriangulo(valueBase, valueAltura);

    alert(area);
}

//círculo

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculo");

    const valueRadio = radio.value;

    const diametro = diametroCirculo(valueRadio);

    const perimetro = circunferencia(valueRadio);

    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculo");

    const valueRadio = radio.value;

    const diametro = diametroCirculo(valueRadio);

    const area = areaCirculo(valueRadio);

    alert(area);
}