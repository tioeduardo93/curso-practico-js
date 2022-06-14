//CÓDIGO PARA EL CUADRADO

function perimetroCuadrado (lado){
   return lado * 4;
} 

function areaCuadrado (lado){
    return lado * lado;
} 

//CÓDIGO PARA EL TRIÁNGULO

function perimetroTriangulo (lado1, lado2, base){
   return lado1 + lado2 + base;
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

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado"); //aqui mandamos a llamar el elemento con el id "inputCuadrado"
    
    const value = input.value; //llamamos al valor de la const "input", que se encuentra justo arriba

    const perimetro = perimetroCuadrado(value); //utilizamos la funcion "perimetroCuadrado" y le damos como parametro el valor de "value"

    alert(perimetro); //envia un mensaje a la pantalla con el valor que deseamos
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}