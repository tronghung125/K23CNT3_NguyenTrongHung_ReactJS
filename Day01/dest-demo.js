//Destructuring
var array = [11,22,33,44];
var [x,y] = array //x=11 y=22
console.log("x",x);
console.log("y",y);

var [a,b,c] = array;
console.log("a",a);
console.log("b",b);
console.log("c",c);

//Objects
const person ={
    name:"Nguyen Hung",
    age:24,
    city:"Ha Noi"
};
console.log(person.name);//NguyenHung
console.log(person.age);//24
console.log(person.city);//Ha Noi

//Cách khác
const{name,city}=person;
console.log(name);
console.log(city);