const frequency = ["always", 'often', 'rarely'];
const impact = ['blocker','major','minor'];



let freq = 'always';
let imp = 'blocker';

if(frequency[0]=== freq && impact[0] === imp)
    {
        console.log("P0");
    }
 else if(frequency[0]=== freq && impact[1] === imp)   
    {
        console.log("P1");
}
else if(frequency[0]=== freq && impact[2] === imp)
    {
        console.log("P2");
    }
else if(frequency[1]===freq && impact[0] === imp)
    {
        console.log("P1");
    }
else if(frequency[1]=== freq && impact[1] === imp)   
    {
        console.log("P2");
}
else if(frequency[1]=== freq && impact[2] === imp)
    {
        console.log("P3");
    }
else if(frequency[2]=== freq && impact[0] === imp)
    {
        console.log("P2");
    }
else if(frequency[2]=== freq && impact[1] === imp)   
    {
        console.log("P3");
    }
else if(frequency[2]=== 'rarely' && impact[2] === 'minor')   
    {
        console.log("P4");
    }
