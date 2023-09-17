require('dotenv').config();
const dbConnect = require('./src/dbConnect')
const server = require('./src/app');
const { PORT } = process.env;

server.listen(PORT, () => {
    console.log(`Listen at port: ${PORT}`);
})