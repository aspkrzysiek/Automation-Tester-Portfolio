//Lesson 10 = Difference between JS and TS
var customerFirstName:string = "Will"
var customerSecondName:string = "Smith"
var age:number = 25
var isHeMarried:boolean = true


//TS prevents us from assigning the value of a different type to the variable which is declared while
// JS does not prevent us from changing data types
//customerFirstName = 100

// You can also create your own custom type, here named Customer:
type Customer = {firstName: string, lastName: string, active: boolean }
var firstCustomer: Customer = {
    firstName:"Margaret",
    lastName:"Thachter",
    active:true
}
