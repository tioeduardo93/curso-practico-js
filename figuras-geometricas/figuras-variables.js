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
