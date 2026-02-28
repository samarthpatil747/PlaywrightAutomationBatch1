
var UID;

let user_name = "TestUser_";
let role = "";
let emp_email = "";
let user_status = "";

const roles = ["admin", "editor", "viewer", "tester", "manager"];

for (let i = 1; i <= 8; i++) {
 
  if (i < 10) UID = "000" + i;
  else if (i < 100) UID = "00" + i;
  else if (i < 1000) UID = "0" + i;

  
  user_status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

  
  emp_email = "testuser"+i+"@testingacademy.com";

  
  role = roles[(i - 1) % roles.length];

  console.log("USR-"+UID+" | "+user_name+i+" | "+emp_email+" | "+role+" | "+user_status+" |");
}