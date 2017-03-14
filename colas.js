var nombres = [];

function Queue (){
  var dataStore = [];

  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print = print;

  function enqueue (element){
    this.dataStore.push(element);
  }
  function dequeue(){
    return this.dataStore.shift();
  }
  function  empty(){
    return this.dataStore.length == 0;
  }
  function print (element){
    return console.log (this.dataStore);
  }
}

var nombre = new Queue();
nombre.enqueue ("Yessica");
nombre.enqueue ("Ariadna");
nombre.enqueue ("Dana");
nombre.enqueue ("Tania");
nombre.enqueue ("Brenda");

var apellido = new Queue();
apellido.enqueue ("García");
apellido.enqueue ("Cabrera");
apellido.enqueue ("Herrera");
apellido.enqueue ("Guerrero");
apellido.enqueue ("Rivas");

for (var i=0; i<5; i++){
  nombres.push(nombre.dequeue() + " " + apellido.dequeue());
}

console.log (nombres);
