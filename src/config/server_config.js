const dotenv = require('dotenv');

// will load the content of .env file into process.env
dotenv.config();

module.exports = {
    PORT: process.env.PORT
}