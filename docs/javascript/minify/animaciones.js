let Auto=document.getElementById("auto"),Elefante=document.getElementById("elefante"),Nube=document.getElementById("nube"),Arbol=document.getElementById("arbol"),Trofeo=document.getElementById("trofeo"),Pelota=document.getElementById("pelota"),textoClick=document.getElementById("textoClick"),arrayMemoria=["auto","elefante","nube","arbol","trofeo","pelota","TERMINADO"],probandoArray,imagenesClick=Array.from(document.getElementsByClassName("imagenesClick"));imagenesClick.forEach(e=>{e.addEventListener("click",()=>{if(textoClick.textContent==e.id){e.classList.add("imagenBien","mostrarImagenesOnClick");let o=arrayMemoria.indexOf(e.id);arrayMemoria.splice(o,1),probandoArray=arrayMemoria[0],textoClick.innerText=probandoArray,toast(),e.previousElementSibling.style.display="none"}else{e.classList.add("imagenMal","mostrarImagenesOnClick");let a=arrayMemoria.indexOf(e.id);arrayMemoria.splice(a,1),probandoArray=arrayMemoria[0],e.previousElementSibling.style.display="none"}arrayMemoria?.length==1&&(botonAnimacion.remove(),document.querySelector("#memoria1 > h5").remove())})});let botonAnimacion=document.getElementById("botonAnimacion"),contenedorDeImagenes=document.getElementById("contenedorDeImagenes");botonAnimacion.addEventListener("click",()=>{botonAnimacion.style.display="none";let e=document.getElementById("contenedorMioLoader");e.className="contenedorMioLoaderAparecer",textoClick.innerText="","bloquearClickContenedorMemoria"!=contenedorDeImagenes.className&&contenedorDeImagenes.classList.add("bloquearClickContenedorMemoria"),setTimeout(()=>{Auto.classList.toggle("mostrarMemoria")},1e3),setTimeout(()=>{Auto.classList.toggle("mostrarMemoria"),Nube.classList.toggle("mostrarMemoria")},2e3),setTimeout(()=>{Nube.classList.toggle("mostrarMemoria"),Trofeo.classList.toggle("mostrarMemoria")},3e3),setTimeout(()=>{Trofeo.classList.toggle("mostrarMemoria"),Pelota.classList.toggle("mostrarMemoria")},4e3),setTimeout(()=>{Pelota.classList.toggle("mostrarMemoria"),Elefante.classList.toggle("mostrarMemoria")},5e3),setTimeout(()=>{Elefante.classList.toggle("mostrarMemoria"),Arbol.classList.toggle("mostrarMemoria")},6e3),setTimeout(()=>{Arbol.classList.remove("mostrarMemoria"),"bloquearClickContenedorMemoria"==contenedorDeImagenes.className&&contenedorDeImagenes.classList.remove("bloquearClickContenedorMemoria"),textoClick.innerText=arrayMemoria[0],botonAnimacion.style.display="",e.className="contenedorMioLoaderEscondido"},7e3)});