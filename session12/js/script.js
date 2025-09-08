// var fName = "Ahmed";
// (fName == "Ahmed") ? console.log(`welcome ${fName}`) : console.log('invalid user')

// if statment

// if(condition/s){
//     true ..
// }
// else {
//     false
// }

// if(fName == "Ahmed") console.log(`welcome ${fName}`) 
//     else console.log('invalid user')

// if(fName == "Ahmed") {
//     var result = `welcome ${fName}`
//     console.log(result) 

// }
//     else {
//         console.log('invalid user')
//     }


// var job = prompt('enter your job')
// console.log(job)

// if (job == null || job == "") console.log('please eneter your job')
// else {
//     if (job == "dev") console.log('developer')

//     else if (job == 'eng') console.log('engineer')

//     else if (job == "doc") console.log('doctor')

//     else console.log('invalid user')
// }

// var num = 20

// if(num > 10 && typeof num == "number" ) console.log('greater than 10')



    // var degree = prompt('') 


    // truthy & false Values
    var text = "lorem" // true
    var text = 20 // true
    var text = true  // true - 
    var text = 0 // false
    var text = null // false
    var text = "" // false
    var text  // false - undefined
    var text = -0  // false 
    var text = false  // false - 

    if(text) console.log('correct')
        else console.log('wrong')


    // console.log(1)
    // console.log(2)
    // console.log(3)
    // console.log(4)
    // console.log(5)
    // console.log(6)
    // console.log(7)
    // console.log(8)
    // console.log(9)
    // console.log(10)


    ///// for looping
    // for(variable ; condition ; increment / decrement){
    //     code . . .
    // }


    // for(var i = 1 ; i <= 21 ; i+=2){
    //     if(i == 17) break
    //     else if (i == 5) continue
    //     console.log(i)
    // }


    // for(var i = 1 ; i<=3 ; i++){
    //     alert("message " + i)
    // }

    // var p = prompt()
//     alert('message')

//     function sum(){
//         var num1 = 20
//         var num2 = 10
//         var total = num1 + num2
//         // console.log(total)
//         // return total
//         // return "js"
//         // return total == 30
//         return total == 50
//     }

//   var result =  sum()

// console.log(result)




// function sumNumbers(n  , m = 10 ){
//     console.log(m)
//     var num1 = n 
//     var num2 = m
//     return num1 + num2
// }

// var res = sumNumbers(10 , 20)
// var res2 = sumNumbers(100 , 40)
// var res3 = sumNumbers(60)
// // console.log(res)
// // console.log(res2)
// console.log(res3)



var fullName // undefined

// function getFullName(startNum , endNum){
//     var fName = prompt('enter your first Name')
//     var lName = prompt('enter your last Name')
//      fullName = `${fName} ${lName}`

//      for(var i = startNum ; i <= endNum ; i++){
//         console.log(i)
//      }
//     // return fullName
// }
// console.log("before call of function " + fullName)
// getFullName(5 , 20)
// console.log("after call of function " +fullName)
// getFullName(100 , 108)


// startNum , endNum , breakNum , continuNum
// function looping(){

// }

// looping(0 , 10 )



// function statment
// function getName(){
//     var p = prompt('enter your name')
//     return p
// }
// var res = getName()


// function expression
// var info = function(){
//     console.log('js')
// }
// info()


// arrow function 
// var getName = (name)=>{
//     return name == "zein"
// }
// var getName = (name)=> name == "zein"

// getName("zein")



var fName = "zein"
var lName = "Tamer"
var age = 10

var userInfo = ["zein" , "Tamer" , 10 ]

console.log(userInfo[2])
userInfo[3] = true

console.log(userInfo.length)

userInfo[userInfo.length] = "maadi"


userInfo.push("october" , 40 , false)

userInfo.unshift("Javascript")

userInfo.pop()
userInfo.shift()
userInfo.shift()

if(userInfo.includes("zdfghjkfgh")){
    console.log('found')
}
else console.log('not found')


console.log(userInfo)





