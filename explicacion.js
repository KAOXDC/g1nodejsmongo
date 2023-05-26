// Tipos de datos

num = 10
num1 = 10.5
nombre = "Diego"
estado = true // false
lista = ["juan", "jose", "Andrea"]

// Operadores Aritmeticos

suma = num + num1
resta = num - num1
producto = num * num1
division = num / num1
modulo = num % num1

// Operadores de Comparación 

x = 3
y = 5

x < y // true
x > y // false
x <= y // true
x >= y // false
x == y // false
x != y // true
x === y // false

// tablas de verdad

V and V = V
F and V = F 
V and F = F
F and F = F

V or V = V
F or V = V 
V or F = V
F or F = F

// Operadores Lógicos
and
or 
-a // not

x == y or num1 < num

// false or false
//     false

// Estructuras
// Estructuras de desición 

if (x > y){
	console.log("x mayor que y")
}
else if (x < y){
	console.log("x menor que y")
} else {
	console.log("son iguales")
}

// Estructuras Ciclicas, Repetitivas, Bucles

// for - Para
// i++  i = i + 1
for (var i = 0; i <= 5; i++) {
	console.log(i)	
}

// While - Mientras
var i = 0
while (i <= 5) {
	console.log(i)	
	i++
}

// Do While - Hacer Mientras
var i = 0
do {
	console.log(i)
	i++	
} while (i < 5)


// Funciones

//declaración 
function saludar () {
	console.log("Hola a Todos!! ")
}

// llamado
saludar()

// declarar la funcion 
function despedir (){
	return "Adios!!"
}

despedir()

// procedimiento con parametros 
function sumar (a , b){
	let x = a
	let y = b
	console.log(x + y)
}

sumar(12, 15)

// funciones con  parametros 
function restar (a, b){
	let x = a
	let y = b
	return (x - y)
}

restar(3, 5)

