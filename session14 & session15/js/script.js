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

if (document.getElementById('userName')) {
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
}



var showUser = () => {
    var tBody = document.getElementById('tableBody')
    console.log(users)
    // tBody.innerHTML = ""
    // tBody.textContent = ""
    tBody.innerText = ""

    users.forEach((item, i) => {


        var tr = document.createElement("tr")
        var td = document.createElement('td')
        td.innerText = item.name
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        td2.innerText = item.email

        var editBtn = document.createElement('button')
        editBtn.innerText = "Edit user"
        editBtn.classList.add('btn', 'btn-success', 'btn-sm')
        editBtn.addEventListener('click', () => {
            console.log(i)
        })
        var deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Remove user"
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', "ms-2")
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


window.addEventListener('scroll', () => {
    var upArrow = document.getElementById('upArrow')
    console.log('scrolling')
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 400) upArrow.classList.remove('d-none')
    else upArrow.classList.add('d-none')
})





// $(".owl-carousel") = document.querySelector('.owl-carousel)
if (document.querySelector('.owl-carousel')) {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 5,
            loop: true,
            nav: true,
            navText: ['<i class="fa-solid fa-angle-left text-danger fs-4 bg-light"></i>', '<i class="fa-solid fa-angle-right"></i>']
        });
    });

}


if (document.getElementById('contactForm')) {
    var contactForm = document.getElementById('contactForm')
    contactForm.addEventListener('input', (e) => {
        // console.log(e.target.id)
        if (e.target.id == "userFirstName") {
            nameValidation(e.target)
        }
        else if (e.target.id == "userEmail") {
            emailValidation(e.target)
        }
        else if (e.target.id == "userPassword") {
            passwordValidation(e.target)
        }
    })
}

var nameValidation = (element) => {
    var inputValue = element.value.trim()
    console.log(inputValue.length);
    (inputValue.length < 3)
        ? handleError(element, "Please enter at least 3 character")
        : handleError(element)

}

// https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/
// https://mailtrap.io/blog/javascript-email-validation/
var emailValidation = (input) => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input.value)) handleError(input)
    else handleError(input, "please enter a valid email")

}

var passwordValidation = (inp) => {
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (strongRegex.test(inp.value)) handleError(inp)
    else handleError(inp, "please enter at least 1 lowercase , 1 uppercase , 1 number , 1 special character")
}

var handleError = (input, msg = "") => {
    input.nextElementSibling.innerText = msg
}


// name ==> 3 character
// email ==> username@domain.subdomain
// password ==> abC1-ff

var str = "            lorem              "
console.log(str.trim())




// localStorage.setItem('firstName' , 'Nouran')
// localStorage.setItem('address' , 'Nasr city')

localStorage.removeItem('address')

var usersList = [
    {name : "Marwa" , email:"marwa@email.com"},
    {name : "Tamer" , email:"Tamer@email.com"},
    {name : "Zein" , email:"Zein@email.com"},
]

console.log(JSON.stringify(usersList))
localStorage.setItem('users' , JSON.stringify(usersList))

var usersLocalStorage = JSON.parse(localStorage.getItem('users'))
usersLocalStorage.push({
    name : "Nouran" , email : "Nouran@email.com"
})

console.log(usersLocalStorage)

localStorage.setItem('users' , JSON.stringify(usersLocalStorage))