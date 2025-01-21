const fs = require('fs');

export default function jsonData() {
    fs.readFile('./books.json','utf-8',(err,data) =>{
    
        if(err)
        {
            console.log(`error reading file from disk ${err}` );
        }
    
        else{
            const databases = JSON.parse(data)
    
           return databases;
        }
    })
}

