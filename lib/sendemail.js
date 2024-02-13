import donext from './donext.js';
import open from 'open';
import resume from './resume.js';
import clipboard from 'clipboardy'; 


export default async () =>{
    const Email = resume.contacts.email;
    const action = ""; // Add the missing variable 'action' and assign a value to it
    open(`mailto:${Email}`)
    donext(["sendemail"])
}
