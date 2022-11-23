let apertura = document.getElementById("open")
let cierre = document.getElementById("close")
let contenedor = document.querySelector(".container")


apertura.addEventListener("click", ()=>
contenedor.classList.add("desplegable"))
cierre.addEventListener("click", ()=>
contenedor.classList.remove("desplegable"))