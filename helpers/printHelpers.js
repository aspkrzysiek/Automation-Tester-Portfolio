export function printAge(age)
{
    console.log(age)
}

//lesson9: Classes and Methods are another form of abstraction similiar to function to create reusable components of your code but
//organize it a little bit different
class CustomerDetails
{
    //method
    printFirstName(firstName){
        console.log(firstName)
    }

// in order to provide some hover-over description use /** and ENTER 
/**
 * This method will print the lastName and replace {*} with which kind of data we are dealing with like STRING
 * @param {string} lastName 
 */
    printLastName(lastName){
        console.log(lastName)
    }
}

export const customerDet = new CustomerDetails()
