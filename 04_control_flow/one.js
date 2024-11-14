// if
const isUserLoggedIn = true;
const temprature = 41;

if (temprature === 41)
{
    console.log("less than 50");
}
else{
    console.log("temprature is greater than 50")
}
console.log("execute");


//<, >, <=, >=, ==, !=


// const score = 200;

// if (score > 100)
// {
//     let power = "fly"
//     console.log(`use power: ${power}`);
// }

// console.log(`use power: ${power}`);
    

// const balance = 1000

// if (balance > 500)
//     {
//         console.log("less then 500")
//     } else  if (balance < 750)
//     {
//         console.log("less then 750")
//     } else if (balance < 900)
//     {
//         console.log("less then 750");
//     } else
//     {
//         console.log("less than 1200");
        
//     }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard)
{
    console.log("Allow to buy courses");
    
}

if (loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User logged in");
    
}