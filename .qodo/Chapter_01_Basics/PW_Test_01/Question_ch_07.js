let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_Limit = 500;
let Min_Response = responseTimes[0];
let Max_Response = responseTimes[0];
let SLA_breached = 0;

let i =0;

while(i<responseTimes.length)
{
    if(responseTimes[i]<SLA_Limit)
    {
        if(responseTimes[i]<Min_Response)        {
            Min_Response = responseTimes[i];
        }
         
    }
    else     
        {
         SLA_breached++;
        }

        if(responseTimes[i]>Max_Response)
        {
            Max_Response = responseTimes[i];
        } 
    i++;
}
console.log("Total requests: " + responseTimes.length);
console.log("Minimum response : " + Min_Response + " ms");
console.log("Maximum response : " + Max_Response + " ms");
console.log("SLA breaches: " + SLA_breached);
console.log("(" + (SLA_breached/responseTimes.length*100).toFixed(2) + "%"+")");
if(SLA_breached !== 0)
{
    console.log("SLA VIOLATED");
}
else{
    console.log("SLA MET");
}