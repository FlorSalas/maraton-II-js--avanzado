//1)Eureka! Nuestra web tendrá una lamparita (imagen o hecha con css), que al oprimir una tecla se encienda y al soltarla se apague(cambia de estilo o imagen). Si la quiero prender y ya está prendida, no hace nada. Lo mismo con el apagado.Eureka! Nuestra web tendrá una lamparita (imagen o hecha con css), que al oprimir una tecla se encienda y al soltarla se apague(cambia de estilo o imagen). Si la quiero prender y ya está prendida, no hace nada. Lo mismo con el apagado.

// const imagen= document.querySelector("img")

// const prenderLamparita= ()=>{
//     imagen.src= "img/prendida.jpg"    
// }

// const apagarLamparita= ()=>{
//     imagen.src= "img/apagada.jpg"    
// }

// document.onkeydown = prenderLamparita
// document.onkeyup = apagarLamparita

//2)Crear un elemento (puede ser cualquier cosa, un cuadrado, círculo, imagen, etc) que cuente la cantidad de veces que se le pasó el mouse por encima. 
//Mostrar en un mensaje la cantidad de veces sumadas e ir actualizandolo cada vez que agregue 1.

// const imagenPerrito= document.querySelector("#dog")

// function updateCounter(e) {
//   console.log("pasaste por la imagen muchas veces")
//   document.querySelector("#num").textContent = e.detail;  //haciendo click funciona
// }

// imagenPerrito.onmouseover = updateCounter


//3) Vamos a crear una app para que cada vez que aprete un botón, me muestre un usuario aleatorio utilizando la siguiente API: https://randomuser.me/api
//Mostrar 3 o 4 datos del usuario.

const clickeo= document.querySelector("#presionado");


const fuente= new XMLHttpRequest(); // este es el objeto, pero en vez de tenerlo en codigo esta online
const url= 'https://randomuser.me/api';
const method= "GET";
fuente.open(method, url);
fuente.send();


    fuente.onreadystatechange= (e)=>{
        console.log(fuente);
        personaje= JSON.parse(fuente.responseText);
        console.log(personaje);
        document.write(`<p>Presentando a: ${personaje.results[0].name.first} ${personaje.results[0].name.last}</p>`)
        document.write(`<p>Tiene ${personaje.results[0].registered.age} años y vive en ${personaje.results[0].location.city}, ${personaje.results[0].location.country}</p>`)
    }


//    clickeo.addEventListener("click", llamoFuncion)