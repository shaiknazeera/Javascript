const emp = { id: 101, name: "Rahul" }
console.log(emp)
Object.freeze(emp)
emp.name = 'Rahul Gandhi'

console.log(emp)
