// var person={
//     age:23,
//     getAge:function(){
//         return this.age;
//     }
// }

// var person2={
//     age:54
// };
// console.log(person.getAge.call(person2))


// -----example2
// var obj={
//     name:"Vivek",
//     getName:function(){
//         console.log(this.name);
//     }
// }

// obj.getName()


// ---------example 3--->
var obj={
    name:"Vivek",
    age:54,
    getName:function(){
        console.log(this.name, ": "+this.age);
    }
}

obj.getName()