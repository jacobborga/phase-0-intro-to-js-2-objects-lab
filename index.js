// Write your solution in this file!
const employee = { name: "Jacob", streetAddress: '1234 Carnitas Rd.' };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copy = { ...employee };
    copy[key] = value;
    return copy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const copy = { ...employee };
    copy[key] = undefined;
    return copy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = undefined;
    return employee;
}