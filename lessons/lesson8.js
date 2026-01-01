// Functions are used to organize code into reusable components

//Declarative function
helloOne()//declerative function can be called at the beggining of a code
function helloOne()

{
    //cofe we wanna run
    console.log('Hello one')
}
// The function is created and we need to provide a name to invoke it. Note that without invoking it it will not print a message (beggining)

//----------------------------------------------------------------------------------------------------

//Anonymous function (without a name but with assigned variable)
var helloTwo = function()
{
    console.log('Hello two')
}

helloTwo()

//E56 function syntax or arrow function

var helloThree = () => 
{
    console.log('Hello three')
}
helloThree()

//Function with arguments
function printName(name,lastName)
{
console.log(name +' ' + lastName)
}
printName('Will', 'Smith')

//Function with return (we can keep function in one place and call them from the other place)

function multiplyByTwo(number)
{
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)
//------------------------------------------------------------------------------------
//import function
import {printAge} from '../helpers/printHelpers.js'
printAge(5)
// we need to go to package.json and add/change -"type": "module"-
// we need to add -export- to printHelpers.js

//second way is to import everything 
import * as helper from '../helpers/printHelpers.js'
helper.printAge(11)




