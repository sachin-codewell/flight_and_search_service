const express = require('express');

const {serverConfig} = require('./config/index')

const port = 8500;
const app = express();

async function setupAndRunServer() {
    app.listen(serverConfig.PORT,()=>{
        console.log(`server is running fine on port ${port}`);
    })
}

setupAndRunServer();