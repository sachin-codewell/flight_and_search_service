const express = require('express');

const port = 8500;
const app = express();

async function setupAndRunServer() {
    app.listen(port,()=>{
        console.log(`server is running fine on port ${port}`);
    })
}

setupAndRunServer();