let peliculasBD
function pintarNetflix(){

        peliculasBD= [
        {nombre: 'harry potter', genero:'ciencia ficcion', costo: 2000, duracion: 100 , foto: "img/peli1.jpg"},
        {nombre: 'dragon ball super' , genero:'anime', costo:3000, duracion: 120 , foto: "img/peli2.jpg"},
        {nombre: 'wakanda forever', genero: 'ciencia ficcion', costo: 6000, duracion: 180 , foto: "img/peli3.png"},
        {nombre: 'Django sin cadenas' , genero: 'ciencia ficcion', costo: 2000, duracion: 70 , foto: "img/peli4.jpg"},
        {nombre: 'el viaje de sohiyiro ' , genero: 'anime', costo: 60, duracion: 90 , foto: "img/peli5.jpg"},

    ]
        
        let fila=document.getElementById("fila")
        peliculasBD.forEach(function(producto){
         
        let columna=document.createElement("div")
        columna.classList.add("col","mt-5")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
        
        let genero=document.createElement("h5")
        genero.classList.add("text-center")
        genero.textContent=producto.genero

        let costo=document.createElement("h5")
        costo.classList.add("text-center")
        costo.textContent= 'costo:' + producto.costo

        let duracion=document.createElement("h5")
        duracion.classList.add("text-center")
        duracion.textContent= producto.duracion + 'min'

        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(costo)
        tarjeta.appendChild(duracion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)  
    })
   
}


pintarNetflix()
/*
let botomMostarTodo=document.getElementById('botonTodo')
botomMostarTodo.addEventListener("click",function(event){    
    pintarNetflix()
    console.log("mostrando toda la cartelera")
})



let botom=document.getElementById('botonFiltro')
botom.addEventListener("click",function(event){
    filtrar()
    
})

function filtrar(pintarNetflix){

    console.log('click botom')
    let filtroDuracion = peliculasBD.filter(function(pelicula){
       return(pelicula.duracion<100)
     })

    console.log(filtroDuracion)
    
}

filtrar(pintarNetflix())

*/


function filtro (){
let botom=document.getElementById('botonFiltro')
botom.addEventListener("click",function(event){

    console.log('click botom')
   let filtroDuracion = peliculasBD.filter(function(pelicula){
    return(pelicula.duracion > 80 && pelicula.genero == 'ciencia ficcion')

})


        let fila=document.getElementById("fila")
        filtroDuracion.forEach(function(producto){
        //fila.innerHTML=""  

        

        let columna=document.createElement("div")
        columna.classList.add("col","mt-5")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
        
        let genero=document.createElement("h5")
        genero.classList.add("text-center")
        genero.textContent=producto.genero

        let costo=document.createElement("h5")
        costo.classList.add("text-center")
        costo.textContent= 'costo:' + producto.costo

        let duracion=document.createElement("h5")
        duracion.classList.add("text-center")
        duracion.textContent= producto.duracion + 'min'

        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(costo)
        tarjeta.appendChild(duracion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)  

        console.log(filtroDuracion)
        console.log(filtroDuracion.length)

    })

    })


}

let botom=document.getElementById('botonTodo')
botom.addEventListener("click",function(event){
    fila.innerHTML=""  

    pintarNetflix()

})

filtro()
