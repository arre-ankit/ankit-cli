//const prompts = require('prompts');

import prompts from 'prompts';
import intro from './intro.js';
import sendemail from './sendemail.js';
import about from './about.js';

const choices = {
    about: {title:"Know more about me", fn: ()=>{about()}},
    sendemail: {title:"Send me an email", fn: ()=>{sendemail()}},
    exit: {title:"Exit, Thanks!", fn: ()=>{} },

}

export default async (choiceskeys) => {
    console.log("");
    const nextChoice = await prompts({
        type: 'select',
        name: 'value',
        message: 'Select an option',
        choices: [...choiceskeys,"exit"].map((key)=>({title:choices[key].title, value:key})),
    });

    `The code you provided is written in JavaScript and is using the optional chaining operator (?.).
    In this code, choices is an object that contains different actions as properties. 
    Each action has a corresponding function associated with it.
    The code is trying to call the function associated with the action property of nextChoice object. 
    However, it is using optional chaining to handle the case where nextChoice.action may be undefined or not present in the choices object.`
    
    choices[nextChoice.value]?.fn();

}
    

