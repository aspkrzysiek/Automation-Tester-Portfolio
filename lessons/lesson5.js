// Logical "AND"
console.log(true && false) //all values have to be TRUE for the expression to be TRUE    

//Logical "OR"
console.log(true || false) //any value should be TRUE for the expression to be TRUE

var ageISMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDrivingLicense = ageISMoreThanEighteen || isUSCitizen
console.log('The scutomer is eligable for DL: ' +eligibilityForDrivingLicense)

// Logical "NOT" 
console.log(6 !==10)