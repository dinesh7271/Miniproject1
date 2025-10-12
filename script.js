var addbutton = document.getElementById("add-button")
var overlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popup-box")
addbutton.addEventListener("click", function () {
    popupbox.style.display = "block"
    overlay.style.display = "block"
})

var addbtn = document.getElementById("add-btn")
var cancelbtn = document.getElementById("cancel-btn")

addbtn.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class", "box-container")
    div.innerHTML = `<h2>${animename.value}</h2>
     <h4>${animeauthor.value}</h4>
     <p>${description.value}</p>
     <button onclick="deleteanime(event)">Delete</button>`
    container.append(div)
    popupbox.style.display = "none"
    overlay.style.display = "none"
})

cancelbtn.addEventListener("click", function (event) {
    event.preventDefault();
    popupbox.style.display = "none"
    overlay.style.display = "none"
})

var container = document.querySelector(".container")
var animename = document.getElementById("animename")
var animeauthor = document.getElementById("animeauthor")
var description = document.getElementById("description")

function deleteanime(event) {
    event.target.parentElement.remove()
}