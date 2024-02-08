#!/user/bin/env node
// const commander = require('commander');

import { Command } from 'commander';

const program = new Command();

// const about = require('./lib/about');
// const packageJson = require('./package.json');

import intro from './lib/intro.js';


const ankit = program.command('ankit');
ankit
    .command('intro')
    .action(intro);



program.parse(process.argv);

// // console.log(chalk.bgGreen('Hello world!'));

// const sleep = (milliseconds=2000) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
// }


// async function intro() {
//     const rainbow = chalkAnimation.rainbow('Welcome to my Resume \n');
//     await sleep();
//     rainbow.stop();

//     console.log(`
//     ${chalk.bgBlue('How to use this app:')}
//     It's very simple, just select below and you will get my resume in the terminal...
//     `);
// }

// await intro();

// async function resume() {
//     const resume = await inquirer.prompt([
//         {
//             type: 'list',
//             name: 'resume',
//             message: 'Select my resume:',
//             choices: ['Education','Skills', 'Projects', 'Contact']
//         }
//     ]);

//     switch(resume.resume) {
//         case 'Education':
//             console.log(chalk.bgYellow(`College:`));
//             console.log(chalk.bgBlue('IIT BHU'));
//             console.log(chalk.bgGreen('Civil Engineering'));
//             console.log('\n');
//             console.log(chalk.bgBlue('Decent Public School'));
//             console.log(chalk.bgGreen('12th'));
//             break;
//         case 'Skills':
//             console.log(chalk('JavaScript- ⭐⭐⭐⭐'));
//             console.log(chalk('TypeScript- 3/5'));
//             console.log(chalk('React'));
//             console.log(chalk('Node'));
//             console.log(chalk('Express'));
//             console.log(chalk('MongoDB'));
//             console.log(chalk('C++'));
//             console.log(chalk('Python'));
//             break;
//         case 'Projects':
//             console.log(chalk.bgBlue('Project 1'));
//             console.log(chalk.bgGreen('Project 2'));
//             console.log(chalk.bgGreen('Project 3'));
//             break;
//         case 'Contact':
//             console.log(chalk.bgBlue('Email:'));
//             console.log(chalk.bgGreen('Phone:'));
//             console.log(chalk.bgGreen('LinkedIn:'));
//             break;
//         default:
//             console.log('No education selected');
//     }

// }


// await resume();
// console.log('\n');
// await resume();
// console.log('\n');
// await resume();
// console.log('\n');
// await resume();
// console.log('\n');
