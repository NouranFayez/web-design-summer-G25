var courses = ["Html", "Css", "Bootstrap", "Js"]
var tracks = ['web Design', "Network"]

// console.log(courses.indexOf("Js"))

// console.log(courses.concat(tracks))
// console.log(courses.toString())
// console.log(courses)

// splice(index , deletedCount , item/s)

var trackList = courses.concat(tracks)

trackList.splice(3, 2) // remove item/s
trackList.splice(2, 0, "Node.js", "Angular", "react")

trackList.splice(4, 1, "php")
console.log(trackList)

// console.log(trackList[0])
// console.log(trackList[1])
// console.log(trackList[2])
// console.log(trackList[3])
// console.log(trackList[4])
// console.log(trackList[5])

// for(var i = 0 ; i < trackList.length ; i++){
//     console.log(trackList[i])
// }

// trackList.forEach((items , i , arr)=>{
//     // console.log(items)
//     // console.log(i)
//     // console.log(arr)
// })



// var p = prompt('course name') // Css

// trackList.forEach((ele , i)=>{
//     if(ele == p ) console.log(i)
// })

// var ind = trackList.findIndex((ele)=>{
//     return ele == p
// })

// var ind = trackList.findIndex((ele)=> ele == p) 
// var ind = trackList.findIndex((ele)=> ele == p) 

// console.log(ind)


// trackList.forEach((ele , i , arr)=>{

// })


// var x = ()=>{

// }




// var nums = [10 , 5 , 2, 7]

// nums.find((ele)=>{
//     return ele > 5
// })

// var item = nums.find((ele)=> ele > 5)
// var item = nums.find((ele)=> ele > 100)
// console.log(item)

// var elements = nums.filter(item => item > 5)
// var elements = nums.filter(item => item > 200)
// console.log(nums)
// console.log(elements)



// var userInfo = ["Nouran" , "Ahmed" , "Fayez" , 31 , "Egyptian" , "nasr city" , true]

var userInfo = {
    firstName: "Zein",
    lastName: "Tamer",
    age: 15,

    fullName: function (middleName) {
        return `${this.firstName} ${middleName} ${this.lastName}`
    },
    addresses: function () {
        return {
            homeAddress: "Maadi",
            officeAddress: "October",
            testFn: function () {
                return "ay 7aga"
            }
        }
    }
}

// console.log(userInfo.age)
// userInfo.lastName = "Fayez"

// console.log(userInfo)
// console.log(userInfo.fullName("Tamer"))

// console.log(userInfo.addresses().officeAddress)
// console.log(userInfo.addresses().testFn())


var user1 = {
    name: "Marwa",
    Job: "Enginner",
    address: "October"
}
var user2 = {
    name: "Zein",
    Job: "Developer",
    address: "Maadi"
}
var user1 = {
    name: "Tamer",
    Job: "Enginner",
    address: "Nasr city"
}

var users = [
    {
        name: "Marwa",
        Job: "Enginner",
        address: "October",
        age : 30
    },
    {
        name: "Zein",
        Job: "Developer",
        address: "Maadi",
        age : 25
    },
    {
        name: "Tamer",
        Job: "Enginner",
        address: "Nasr city",
        age : 40
    }
]

// console.log(users)

// users.forEach((item , i , arr)=>{
//     console.log(item)
//     console.log(item.age)
// })



// prompt() ==> numberOfUsers // 3

// function ==> addUser() ==> name , id , balance
// function ==> editUserBalanceById() ==> id , newBalance
// function ==> deleteUserById() ==> id




var str = "Lorem ipsum dolor sit amet consectetur, dolor elit. Cum, quia."

// console.log(str.length)
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])

// for(var i = 0 ; i < str.length ; i++){
//     console.log(str[i])
// }

// console.log(str.includes("sit"))
// console.log(str.includes("ghkhkj"))
// console.log(str.startsWith('Lorem'))
// console.log(str.endsWith('html'))
// console.log(str.replace('dolor' , "JAVASCRIPT"))
// console.log(str.replaceAll('dolor' , "JAVASCRIPT"))
// indexof()
// slice()
// toLowercase()
//toUppercase()


// var p = prompt('Number')
// console.log(p)
// console.log(Number(p))
// console.log(parseInt(p))
// console.log(parseFloat(p))

// var txt = "Lorem"
// var num = 30

// console.log(isNaN(txt))
// console.log(isNaN(num))


// console.log(Math.random()*100)

var dec = 35.3

// console.log("Round "+Math.round(dec))
// console.log("ceil "+Math.ceil(dec))
// console.log("floor "+Math.floor(dec))

// console.log(Math.max(30 , 100 , 5, 20))
// console.log(Math.min(30 , 100 , 5, 20))
// console.log(Math.abs(-5))




// console.log(Math.round(Math.random()*100))



var d = new Date()

console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth()) // 0 - 11
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
            console.log(month[d.getMonth()])
console.log(d.getDate())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())


var newDate = new Date("1-1-2001")
console.log(newDate)