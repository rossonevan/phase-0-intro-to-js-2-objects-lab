let employee = {
    name: "Bob",
    streetAddress: "101 Cool Lane" ,
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newObj = {...employee};
   newObj[key] = value;
    return newObj; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey() {

}

function destructivelyDeleteFromEmployeeByKey() {
    
}