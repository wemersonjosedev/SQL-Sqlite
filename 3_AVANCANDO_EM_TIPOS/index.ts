// 1 - ARRAYS
let numbers: number[] = [1, 2, 3, 4, 5, 6]

console.log(numbers);

console.log(numbers.push(2), numbers[6])

console.log(numbers[2]);

console.log(numbers.map(num => num * 2));

// numbers = "teste"

const nomes: string[] = ["Wemerson", "Jesus"]

// nomes.push(5)

// 2 - OUTRA SINTAXE ARRAY
const num: Array<number> = [100, 200]

num.push(2545)

console.log(num)

// num.push("teste")

console.log(num[1])

// 3 - Anny
const arr1:any = [1, "Teste", true, [], {nome: "Wemerson"}]

console.log(arr1)

arr1.push([2, 3, 9])

console.log(arr1);

// 4 - PARAMETROS TIPADOS
function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 9)

// soma("a", "b")

// 5 - TIPOS DE RETORNO 
function greeting(name: string): string {
    // return 78
    return `Olá ${name}`
}

console.log(greeting("Wemerson"));

// 6 - FUNCAO ANONIMA
setTimeout(function() {
    const sallary: number = 2000

    // console.log(parseFloat(sallary))

    // console.log(sallary)
}, 200)

// 7 - TIPOS DE OBJETOS
function passCoordinates(coord: {x: string, y: number}) {
    console.log("name coordinates: " + coord.x + " sallary: " + coord.y)
}

const objCoord = {x: "Wemerson José da Cunha", y: 2000}

passCoordinates(objCoord)
// passCoordinates({fhuashjf: "251", jifahjsoi:6245})

// 8 - PROPS OPCIONAIS
function showNumbers(a: number, b: number, c: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    console.log("C: " + c)
}

showNumbers(1, 2, 7)
// showNumbers(2, 5) ELE NÃO ACEITA MAIS OU MENOS NÚMEROS DOS QUE O DEFINIDO NA FUNÇÃO SEM O PONTO DE INTERROGAÇÃO
function showNumbers2(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if (c) {
        console.log("C: " + c)
    }
}

showNumbers2(1, 2)

// 9 - VALIDANDO ARGUMENTOS OPCIONAL
function advancedGreenting(firstName: string, lastName?: string) {

    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`
    }
    else {
        return `Olá ${firstName}, tudo bem?`
    }
}

console.log(advancedGreenting("José"))
// console.log(advancedGreenting("Wemerson", "José"));

// 10 - UNION TYPE
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, "Teste", true]

// 11 - AVANCANDO EM ANION TYPE
function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado"        
    }
    else {
        return `A função do usuário é: ${role}`
    }
}

console.log(showUserRole(false))
console.log(showUserRole("Administrador"))

// 12 - TYPE ALIAS
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")
showId(123)

// 13 - INTERFACE
interface Point {
    x:number
    y:number
    z:number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - INTERFACE X TYPE ALIAS
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Mateus", age: 30}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - LITERAL TYPES
let test = "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

// showCoords("top")

// 16 - NON NULL ASSERTION OPERATORS
const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - BINGINT
let n: bigint

// n = 1

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)

// 18 - SYMBOL
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)