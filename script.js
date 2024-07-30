let patient = {
    name : "jimin",
    age : 17,
    disease : "cold" 
};

console.log(patient);
console.log(patient.name);
console.log(patient.age);
console.log(patient["age"]);

patient.name = "V";
console.log(patient);

let patientList = [{name : "jimin", age : 13}, {name : "V", age : 25}, {name : "JK", age : 30}];
console.log(patientList);

console.log("첫번째 환자는:", patientList[0]);
console.log(patientList[0]);

console.log(patientList[0].age);

//어레이와 문법이 비슷해서 다르게도 표현가능함//
//console.log(patient.age) = console.log(patient["age"])//
//console.log(patient[0].age) = console.log(patient[0]["age"])//
