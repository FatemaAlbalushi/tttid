// import { getStudent } from "./ttt_client.mjs";
// import { createStudent } from "./ttt_client.mjs";
console.log("Starting my Application");

let number = 10;
let name = "TRA";
let flag = true;
let listofNames = ["MrA","MrB"]
let myMap = new Map();
myMap.set("id",12345);
myMap.set("name","MrA");
console.log(myMap.get("name"));

let myObj = {"name":"MrA","id":12345};
console.log(myObj.name,myObj.id);

for(let index=0;index<listofNames.length;index++){
    console.log(listofNames[index]);
}

let lambdaFunc = (n1,n2) => {
    console.log("Adding two number "+n1+" and "+n2);
    return n1+n2;
};

console.log(lambdaFunc(5,6));

listofNames.forEach((elem)=>{
    console.log(elem);
});

myMap.forEach((v,k)=>{
    console.log(k,v);
});

export function mySum(...args){
    console.log(args);
}
mySum(1,2,3,4,5);

alert("Welcome page");

console.log("\n\n==============\n\n");

class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;

    }

     getName = () => this.name;

}

let student = new Student(0,"fatma");
console.log(student.id);
console.log(student.name);
console.log(student.getName());


//document.getElementById("Wm").innerHTML = "Welcome to Anwaar World";

//getStudent();
