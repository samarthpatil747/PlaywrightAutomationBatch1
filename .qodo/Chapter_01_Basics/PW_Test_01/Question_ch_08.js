
const env = ["dev", "staging", "qa", "prod"];
let env_index = "";
let env_name = "staging";
var base_url = "https://"+env_name+"-api.testingacademy.com";
var api_key = env_name+"-key_xxx-xxx";
let timeout = 0;
let discription = env_name+" - Pre-production mirror";
switch(env_name)
{
      case "staging":
        env_index = 1;
        timeout = 8000;
        discription = env_name+" - Pre-production mirror";
        break;
      case "dev":
        env_index = 0;
        timeout = 5000;
        discription = env_name+" - Development environment";
        break;
      case "qa":
        env_index = 2;
        timeout = 4000;
        discription = env_name+" - QA environment";
        break;
      case "prod":
        env_index = 3;
        timeout = 2000;
        discription = env_name+" - Production environment";
        break;
      default:
        console.log("Invalid environment name");

}

if(env.includes(env_name))
{
    console.log("Environment: "+env_name.toUpperCase()+" Base URL: "+base_url+" API Key: "+api_key+" Timeout: "+timeout+"ms  Description: "+discription);
}