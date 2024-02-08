// const donext = require("./donext.js");
// const chalk = require("chalk");
// const phraze =  require("phraze");

import donext from './donext.js';
import chalk from "chalk";
import art from "ascii-art";



export default async () =>{
    art.font(`Hey I am Ankit`, 'doom', function(err, rendered) {
        console.log(rendered);
    });
    
    setTimeout(() => {
        console.log(chalk.bold("@ Curious web developer learning new technologies everyday"));
        donext(["about","sendemail"])
    }, 1000);
    
}
