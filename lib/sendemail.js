import donext from './donext.js';

export default async () =>{
    console.log("Sending email");
    donext(["sendemail"])
}