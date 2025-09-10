var span = document.querySelector(".text-primary span")
var spanElements = document.querySelectorAll('.text-primary span')

console.log(span)
console.log(spanElements)


function changeImg(ele) {
    console.log(ele)
    var img = document.querySelector('#img')
    console.log(img.src)
    img.src = "images/2.jpg"
}
// https://www.w3schools.com/jsref/dom_obj_event.asp

var userName = document.getElementById('userName')

userName.addEventListener('input', (e) => {
    // console.log(userName.value)
    // console.log(e.target.value)
    // console.log(e)

    e.target.nextElementSibling.innerText = e.target.value
    // console.log('typing...')
})


var userForm = document.getElementById('userForm')
var users = []

userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userEmail.value)

    var user = {
        name: e.target.elements.userName.value,
        email: e.target.elements.userEmail.value
    }

    users.push(user)
    console.log(users)

    showUser()
    // console.log('submit')
})



var showUser = () => {
    var tBody = document.getElementById('tableBody')
    console.log(users)
    // tBody.innerHTML = ""
    // tBody.textContent = ""
    tBody.innerText = ""

    users.forEach((item , i )=>{

    
        var tr = document.createElement("tr")
        var td = document.createElement('td')
        td.innerText = item.name
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        td2.innerText = item.email

        var editBtn = document.createElement('button')
        editBtn.innerText = "Edit user"
        editBtn.classList.add('btn' , 'btn-success' , 'btn-sm')
        editBtn.addEventListener('click' , ()=>{
            console.log(i)
        })
        var deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Remove user"
        deleteBtn.classList.add('btn' , 'btn-danger' , 'btn-sm' , "ms-2")
        td3.append(editBtn)
        td3.append(deleteBtn)
    
        tr.append(td)
        tr.append(td2)
        tr.append(td3)
        // console.log(tr)
        // console.log(td)
        // console.log(td2)
        tBody.append(tr)
    })



}




// < tr >
//                 <td>
//                     Nouran
//                 </td>
//                 <td>
//                     nouran@email.com
//                 </td>
//             </tr >




// BOM => browser object model (window)
// DOM ==> document object model (document)

console.log(document.body)


window.addEventListener('scroll' , ()=>{
    var upArrow = document.getElementById('upArrow')
    console.log('scrolling')
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 400) upArrow.classList.remove('d-none')
        else upArrow.classList.add('d-none')
})

