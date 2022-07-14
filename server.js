const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const routers = require("./routers/index");

//Environment Variables
dotenv.config({
    path: "./config/env/config.env",
});

//MongoDB Connection
connectDatabase();

const app = express();
const PORT = process.env.PORT;

//Routers Middlewares
app.use("/api", routers);

app.listen(PORT, () => {
    console.log(
        `App Started on PORT: ${PORT} Envrionment: ${process.env.NODE_ENV}`
    );
});
