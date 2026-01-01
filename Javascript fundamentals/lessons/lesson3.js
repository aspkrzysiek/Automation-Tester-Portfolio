//Objects hold multiple values
var customer = {
    firstName:'John',
    secondName:'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
console.log(customer)
console.log(customer.secondName)
console.log(customer['secondName'])

customer.firstName = "Mike"
customer['secondName'] = "Silver"
console.log(`${customer.firstName} ${customer.secondName}`)

//Array - list of items you want to save
var car = ["Volvo", "Toyota", "Tesla"]
//overwritten
car[0] = "BMW"
console.log(car[0])
//Objects ale cand have Arrays
console.log(customer.cars)
