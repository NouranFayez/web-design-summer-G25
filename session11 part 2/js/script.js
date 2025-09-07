console.log('Js')

// var let const

var firstName = 'Nouran'
var num = 20
var middleName = "Ahmed"
var lastName = "Fayez"
// concatenate
var fullName = firstName + " " + middleName + " " + lastName

// template string
var fullName = `my name is
 ${firstName} ${middleName} ${lastName}`
 var isGraduated = true
//  case sensitive
//  console.log(fullname)

// console.log(fullName)
// console.log(isGraduated)
// var h
// console.log(h)
// var k = null
// var p  = prompt("enter your name" , "enter your name" )
// console.log(p)


// -- operators ==> Mathematical operators ==> (+ - / * ** % ++ --)

// var a = 10
// var b = 20
// var c = a + b

// var f = "Js"

// console.log(c / f) // NaN => Not a Number

// console.log(f)

// ++ increment
var h = 10
console.log(h++) // 10 - 11
console.log(++h) // 12
console.log(h) // 12

// -- decrement

// var g = 5
// console.log(--g)


//  Assignment Operators ==> (+= -= /= *= %=)
var n = 5
// n = n + 3

n+=3 // 8
n+=10 // 18
// console.log(n)


// comparison operators ==> (>  >= < <= == === != !==) ==> boolean (true/false)

// var n = 10
// var m = 10
// var k = "10"
// console.log(n > m)
// console.log(n >= m)
 
// console.log(m == k) // value - true
// console.log(m === k) // value - data type - false

// var num = 20
// var str = "ghjk"
// console.log(num == str)
// console.log('-----------------------------')
// console.log(m != k) // value
// console.log(m !== k) // value - data type

// console.log(num != str)


// ///// unary operator ==> typeof
// var num = 20
// var str = "ghjk"

// console.log(typeof(num))
// console.log(typeof str)


// logical operator ==> && || !

var m = 20
var firstName = "Marwa"
// console.log(m > 10)  // true
// console.log(firstName == "Marwa") // true


// console.log(m > 10 && firstName == 'Marwa' && typeof m == "string")
// console.log(m > 10 || firstName == 'Nouran' || typeof m == "string")

// console.log(!m  > 10)

// ternary Operator ==> (condition)? true : false

var p = prompt('enter your name')
console.log(p);

(p == "Ahmed" || p == 'ahmed') ? console.log('welcome Ahmed') : console.log('invalid user')