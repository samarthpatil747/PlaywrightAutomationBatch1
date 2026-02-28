let results = ["fail", "pass", "pass","fail", "pass", "pass","pass","skip"];
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
    console.log("Passed tests: " + passTests);
    console.log("Failed tests: " + failTests);
    console.log("Skipped tests: " + skippedTests);

    console.log("Overall release status:");
    if (passTests == results.length) {
        console.log("Ready for release");
    } else if(failTests<=2){
        console.log("review");
    } else if(failTests>=2){
        console.log("block");
    }
    