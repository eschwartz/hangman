// let nameArray = ['Edan', 'Schwartz'];
// let [firstName, lastName] = nameArray;
// console.log(firstName)
// console.log(lastName)


function getNameArray() {
    let nameArray = ['Edan', 'Aaron', 'Schwartz'];
    return nameArray;
}

let [firstName, middleName, lastName] = getNameArray();
console.log(firstName)
console.log(middleName)
console.log(lastName)

// Inside the BOR
function useState(initialState /* 0 */) {
    return [stateVal, aFunctionToChangeThatValue];
}

let [rocks, setRocks] = useState(0);