const express = require("express");
const jsonData = require( "./fileSystem");


var app = express();

app.get("/",(request,response)=>{
    response.statusCode.valueOf(200)
    response.send({
        "statusCode": 200,
        "message":"Hello world"
    });
    
})

app.get("/books",(request,response)=>{
    let bookName = express.request.query?.name;

    if(!bookName){
        response.statusCode(400);
        response.send({
             "statusCode": 400,
            "message":"Bad request as bookname is not present"
        })
    }
    else{
        let bookColletion = jsonData?.books.filter( bookName => bookName.includes(bookName));
        response.statusCode(200);
        response.send({
             "statusCode": 200,
            "message": bookColletion
        })
    }

})


app.listen(4000, () =>{
    console.log("application has started on %d", 4000);
})