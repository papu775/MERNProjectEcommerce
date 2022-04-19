const dotenv = require('dotenv');
const app = require('./app');
const connectDatabase = require('./database');


//Handling Uncaught Exception
process.on("uncaughtException",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due Uncaught Exception `);
        process.exit(1);
})

//config
dotenv.config({path:'./backend/config/config.env'});

connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})

// unhandle promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    });
});

