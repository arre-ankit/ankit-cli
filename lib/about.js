import donext from "./donext.js";
import art from 'ascii-art'
import resume from "./resume.js";
import chalk from "chalk";

function getage(){
    var dob = new Date("12/26/2004");  
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);  
    return age;
}

export default async () =>{
    art.font(`Ankit`, 'rusted', function(err, rendered) {
        console.log(rendered);
    });

    setTimeout(() => {
        const content = `Age: ${getage(resume.birthday)} years |   Address: ${resume.address}

        🏫 College:
            IIT BHU(Varanasi) 
            B.Tech in Civil Engineering
            2021-2025
    
        📞 Contact:
            ${Object.entries(resume.contacts).map(([key, value]) => {
                return `${key}: ${value}`;
                }).join("\n\t")}

        🔗 Links: 
            ${Object.entries(resume.links).map(([key, value]) => {
                return `${key}: ${value}`;
                }).join("\n\t")}

        🛠️ Skills: 
            ${Object.entries(resume.skills).map(([key, value]) => {
                return `${key}: ${value}`;
            }).join("\n\t")}

    `
        console.log(content);
        console.log(chalk.bold("@ Ping me on Email by command..."));

        donext(["sendemail"])
    }, 3000)
}