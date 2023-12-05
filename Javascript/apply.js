//the apply method is similar to call()  method the only difference call() method takes argument seprately wheras , apply takes argument as an array,

function saySomething(message){
    return this.name +" is " +message;
}

var person={name:"Jhon"};
console.log(saySomething.apply(person,["awesome"]));