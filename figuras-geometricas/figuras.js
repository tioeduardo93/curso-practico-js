//CÓDIGO PARA EL CUADRADO

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide un total de: " + ladoCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd();

//CÓDIGO PARA EL TRIÁNGULO

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.66;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo mide un total de: " + perimetroTriangulo + "cm");

const areaTriangulo = baseTriangulo * alturaTriangulo / 2;
console.log("El área del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//CÓDIGO PARA EL CÍRCULO

console.group("Círculo");

const radio = 4;
const diametro = radio*2;
const PI = Math.PI; //el valor de PI
console.log("El radio del círculo es de: " + radio + "cm");

const circunferencia = PI * diametro;
console.log("La circunferencia es de: " + circunferencia + "cm");

const areaCirculo = PI * radio * radio;
console.log("El área del circulo es de: " + areaCirculo + "cm^2 ")

console.groupEnd();
