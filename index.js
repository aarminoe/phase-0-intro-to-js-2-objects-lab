// Write your solution in this file!
let employee = {
    name: 'Aaron',
    streetAddress: '123 Lane',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmp = {...employee};
    updatedEmp[key] = value;
    return updatedEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmp = {...employee}
    delete updatedEmp[key]
    return updatedEmp
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}