let results = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let passTests = 0;
let failTests = 0;
let skippedTests = 0;

for(let i=0; i<results.length; i++)
    {
        if(results[i]=="pass"){
            passTests++;
        }
        else if(results[i]=="fail"){
            failTests++;
        }
        else if (results[i]=="skip"){
            skippedTests++;
        }   
    }
    console.log("Total Test report summary:");
    console.log("Total tests: " + results.length);
    console.log("Passed: " + passTests);
    console.log("Failed: " + failTests);
    console.log("Skipped: " + skippedTests);
    console.log("Pass Rate: " + ((passTests/results.length)*100).toFixed(2) + " %");

    console.log("VERDICT:");
    if (passTests == results.length) {
        console.log("Ready for release");
    } else if(failTests<=2){
        console.log("review before release");
    } else if(failTests>=2){
        console.log("block release");
    }
    