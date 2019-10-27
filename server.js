const express = require('express');

const app = express();

const port = 3000;

app.use(express.static(__dirname+'/public/'));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get("/data/:userinput", (req, res) => {
    //call micosoftw waws services api
    let result = sendTextAndGetValueBackFromAWS(req.params.userinput)
    res.send(result);
});

// app.post("/", (req, res) => res.send)

app.listen(port, () => console.log('test'));

// import entire SDK
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
// import AWS object without services
var AWS = require('aws-sdk/global');
// import individual service
var S3 = require('aws-sdk/clients/s3');

// function sendTextAndGetValueBackFromAWS(textToAnalyze){
//     var comprehend = new AWS.Comprehend();
//     var params;
//     comprehend.batchDetectDominantLanguage(params, function (err, data){
//         if (err) {
//             console.log (err, err.stack);
//         } else {
//             // console.log (data);
//             return data;
//         }
//     })
// }
var comprehend = new AWS.Comprehend();
var params = {
    TextList: ["text to analyze"]
};
comprehend.batchDetectDominantLanguage(params, function (err, data){
    if (err) {
        console.log (err, err.stack);
    } else {
        console.log (data);
    }
})

// comprehend.detectEntities(params = {}, ){
    
// }