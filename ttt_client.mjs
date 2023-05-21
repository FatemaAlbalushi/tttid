
const getStudent = (id) => {
    //fetch("http://localhost:8080/api/student")
let url =`https://thedynamicdoers.com/api/students`;

if(!isNaN(id)){
    url = `https://thedynamicdoers.com/api/students/${id}`
}

let reqCongig = {
    method: "GET"
}

fetch(url,reqCongig)
.then((response) => {return response.json();})
.then((parsedResponse) =>{console.log(parsedResponse);})

}


const createStudent = (id) => {
    //fetch("http://localhost:8080/api/student")
let url =`https://thedynamicdoers.com/api/students`;

// if(!isNaN(id)){
//     url = `https://thedynamicdoers.com/api/students/${id}`
// }

let reqConfig = {
    method: "POST",
    headers : {"Content-Type" :"application/json;charset=UTF-8" },
    body: JSON.stringify({name:"Mr.Test3", email:"test3@gmail.com"})
}

fetch(url,reqConfig)
.then((response) => {return response.json();})
.then((parsedResponse) =>{console.log(parsedResponse);})

}
// createStudent();
// getStudent();


export{getStudent, createStudent}
