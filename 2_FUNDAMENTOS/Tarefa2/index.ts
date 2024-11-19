// 1 - numbers
let x: number = 10

console.log(x)

x = 15

console.log(typeof x)

const y:number = 15.55646

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - Strings
const firstName:string  = "Wemerson"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "José"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - Boolean
let a: boolean = false

console.log(a)

console.log(typeof a)

a = true

console.log(a)

// 3 - inference e annotation
let ann: string = "TESTE"

let inf = "teste"

// ann = 1
// inf = 1 ERRO

console.log("Testando 3")

// 5 - desafio 2
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Eu vou imprimir o número ${numberToString}`

console.log(printMyNumber)