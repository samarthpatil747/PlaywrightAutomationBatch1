let isPresent = true;
let isEnabled = false;
let isDisplayed = true;

if( isDisplayed && isEnabled && isPresent)
{
    console.log("Element is ready for interaction");
}
else if(isDisplayed==true || isEnabled==false || isPresent==true)
{
    console.log("Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.");
}
else if(isDisplayed==false || isPresent==true)
{
    console.log("Status: NOT FOUND Severity: FAIL Action: Element is not visible. Check if element locator is correct or if element is present in DOM.");
}
else if(isPresent==false)
{
    console.log("Status: NOT FOUND Severity: FAIL Action: Element is not present in DOM.");
}