// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

class Employee {
    code: number;
    name: string;
}

let employee1: Employee = {
    code : 10,
    name : "Jhon"
};

console.log(employee1);