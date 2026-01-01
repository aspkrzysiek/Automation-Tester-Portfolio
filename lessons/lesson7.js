// Loops are used to repeat the same situation several times
//statement1 wHat we wanna start the loop with
//statement2 How long do we wanna run our loop and when we wanna stop
//statement3 what do we wanna do after each cycle of the loop

//i=i+1 is the same as i++

/*
for(statement1; statement2; statement3)
{

}
*/

//for loop
for(let i=0; i<=3; i++)
{
    console.log('Hello World!'+i)
}

//for of loop
var cars = ["Volvo", "Toyota", "Tesla"]
for (let car of cars)
{
   console.log(car)
   if (car=="Toyota")
   {
    break
   }
}

//E56 Syntax for each loop (simpler way of using FOR OF LOOP)
var phones = ["Nokia", "Honor", "Samsung"]

phones.forEach(phone=>
{
    console.log(phone)
})