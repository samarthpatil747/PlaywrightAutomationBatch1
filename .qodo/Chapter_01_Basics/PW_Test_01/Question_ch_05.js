
var UID = 1;

const INU = 3;
let user_name = "TestUser_"
var role="";
let emp_email ="";
let user_status = "";
var j = 0;


for(let i = 1; i <=8; i++) 
{ 
    if (i<10)
    {
        UID = "000" + i;
        //console.log(UID);
    }
    else
    if (i>=10 && i<100)
    {
        UID = "00" + i ;
    }
    else if (i>=100 && i<1000)
    {
        UID = "0" + i ;
    }
    
    if(i%3==0)
    {
        user_status = "INACTIVE";
    }
    else {
        user_status = "ACTIVE";
    }
    emp_email = "testuser"+i+"@test.com@testingacademy.com";

    
    for(let k=j; k<5; k++)
        {
            
        if (k==0){
            role = "Admin";
            break;
        }
        if (k==1){
            role = "Editor";
            break;
        }
        if (k==2){
            role = "Viewer";
            break;
        }
        if (k==3){
            role = "Tester";
            break;
        }
        if (k==4){
            role = "Manager";
            break;
        }
         
    }
   
    
    console.log("USR-"+UID+" | "+user_name+i+" | "+emp_email+" | "+role+" | "+user_status+" | ");
    
}