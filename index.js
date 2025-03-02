// Write your solution in this file!
const employee = {
    name : "Yvonne",
    streetAddress: "Utawala",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee };
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway"
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newKey = {...employee};
    delete newKey.name;
    return newKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}
