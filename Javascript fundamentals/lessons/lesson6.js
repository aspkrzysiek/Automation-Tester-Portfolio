// Conditional statement
// is neded when you need to split the flow of your application based on define condition
/*

if(condition){
    //execute some code here
} else {
    //execute some code here
}

*/
// If hour between 6 and 12 print "Good Morning"
// If hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good evening

var hour = 5

if(hour >= 6 && hour < 12)
{
    console.log('Good morning')
}
else if(hour>=12 && hour <18)
{
    console.log('Good Afternoon')
}
else
{
    console.log('Good evening')
}



var ageISMoreThanEighteen = false
var isUSCitizen = true

if (ageISMoreThanEighteen && isUSCitizen)
{
    console.log('Customer is eligable for DL')
}
else
{
    console.log('Customer is NOT eligable for DL')
}