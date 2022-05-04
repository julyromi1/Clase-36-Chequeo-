class Player {
  constructor() {
    this.name= null;
    this.index = null;
    this.positionX= 0;
    this.positionY = 0;
  }

getCount (){
  var playerCountRef = database.ref ("playerCount");
  playerCountRef.on ("value", data=>{
    playerCount = data.val ();
  }); //La función arrow se utiliza mucho cuando se enlazan las bases de datos y aplicaciones =>{} se usa para sintentizar.
} 

updateCount (count){
  database.ref ("/").update ({ //La diagonal va a obtener información del archivo raíz EJ: CLASE-36 es el archivo raíz y assets,js,lib son carpetas dentro de el archivo raíz. E index, sketch y todas las demas son los archivos dentro de carpetas.
    playerCount:count
  })
}
}
