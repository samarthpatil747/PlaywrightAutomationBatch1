const counter = 3;
const username ="admin@testingacademy.com";
const password = "Test@1234";
let Attempt = 1;
var isAuthenticated = false;
let input_username = "admin@testingacademy.com";
let input_password = "Test@12345";

if(input_username === username && input_password === password)
{
    isAuthenticated = true;
    let result = "PASSED";
}
else
{
    isAuthenticated = false;
    result = "FAILED";
}

do{
    
    if(!isAuthenticated)
    {    
    console.log("Attempt "+Attempt+": "+result+" - "+" Strike " + Attempt+"/"+counter);    
   
    }

    Attempt++;
}
while(Attempt <= counter);

if (Attempt > counter && !isAuthenticated)
{
    console.log("Account Locked "+"Attempt "+Attempt+":"+"Account Locked - Rejected");
}
else if(isAuthenticated)
    {
    console.log("Welcome "+username);
    }


