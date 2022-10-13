const express = require('express')
const app = express();
const morgan= require('morgan');


app.use(morgan('tiny'));
const port= 8080;


app.get('/', (res,req) => {
    req.send('hi')
})


app.listen(port,()=>{
    console.log(`server listening on port:${port}`)
});