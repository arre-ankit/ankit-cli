#!/user/bin/env node

import { Command } from 'commander';

const program = new Command();

import intro from './lib/intro.js';
import sendemail from './lib/sendemail.js';


const ankit = program.command('ankit');
ankit
    .command('intro')
    .action(intro);

ankit 
    .command('email')
    .argument('[action]', "send")
    .action(sendemail);

program.parse(process.argv);

