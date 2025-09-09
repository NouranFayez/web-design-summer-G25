console.log(document.getElementsByTagName('h2'))

var h2 = document.getElementsByTagName('h2')
h2[1].innerText = "Javascript Web Design"

var h2Element = document.getElementById('h2_element')

console.log(h2Element)
h2Element.innerText= "Javascript "

// h2Element.style.color = "blue"
// h2Element.style.backgroundColor = "#eeeeee"
// h2Element.style.padding = "2%"


h2Element.classList.add("text-primary" , "bg-light" , "p-3")
h2Element.classList.remove('border-primary')
h2Element.classList.toggle("display-3")

var classElements = document.getElementsByClassName("custom-class")
console.log(classElements)


for(var i =0 ; i< classElements.length ; i++){
    classElements[i].classList.add('text-danger')
}



