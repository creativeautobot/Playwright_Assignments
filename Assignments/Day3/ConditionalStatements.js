function launchBrowser(browserName){

    if(browserName === "Chrome"){   

            console.log("Launching "+browserName+" Browser");

    } else if(browserName === "Firefox"){

            console.log("Launching "+browserName+" Browser");
            
    } else if(browserName === "Edge"){

            console.log("Launching "+browserName+" Browser");
    } else {

            console.log("Please provide a valid browser name");
    }

}

function runTests(testType){

    switch(testType){

        case "Smoke":   
            console.log("Running "+testType+" Tests");
            break;                          
        case "Regression":
            console.log("Running "+testType+" Tests");
            break;  
        case "Sanity":
            console.log("Running "+testType+" Tests");
            break;  
        default:    
            console.log("Please provide a valid test type");
    }

}

launchBrowser("Chrome");
runTests("Sanity");