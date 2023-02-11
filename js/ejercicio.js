
let mostrarReloj = document.getElementById('reloj');


setInterval(()=>{
  let hora = new Date();
  mostrarReloj.innerHTML = hora.toLocaleTimeString();
},1000);