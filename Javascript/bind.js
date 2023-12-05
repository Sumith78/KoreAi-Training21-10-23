//This method returns a new function, where the value of "this" keyword will be bound to the owner object,which is provided as parameter.



var bike={
    displayDetails:function(registerNumber , brandName){
        return this.name+" , "+ "bike: "+ registerNumber +" ,"+brandName;
    }
}

var person={name:"Alok"};

var detailsOfPerson=bike.displayDetails.bind(person, "TS0122", "Bullet");

console.log(detailsOfPerson());
