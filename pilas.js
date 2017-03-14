var nombres = [];

function stack (){
  var items = [];
  this.push = function(element){
    items.push (element);
  };
  this.pop = function(){
    return items.pop ();
  };
}

var nombre = new stack ();
nombre.push ("Yessi");
nombre.push ("Ariadna");
nombre.push ("Dana");
nombre.push ("Tania");
nombre.push ("Brenda");

var apellido = new stack ();
apellido.push ("García");
apellido.push ("Cabrera");
apellido.push ("Herrera");
apellido.push ("Guerrero");
apellido.push ("Rivas");

for (var i=0; i<5; i++){
  nombres.push (nombre.pop() + " " + apellido.pop());
}
document.write(nombres);
