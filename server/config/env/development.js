"use strict";
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()
var protocol = process.env.protocol || "http",
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || "3000",
    baseUrl = `${protocol}://${host}:${port}`,
    path = require("path"),
    rootPath = `${__dirname}/../../..`;

process.env.TMPDIR = `${rootPath}/.tmp`;

module.exports = {
    server: {
        protocol: protocol,
        host: host,
        port: port,
        baseURL: process.env.BASEURL || baseUrl,
        root: rootPath,
        temp: `${rootPath}/.tmp`
    },
    db: {
        host: process.env.DB_HOST || host,
        port: process.env.DB_PORT || 12706,
        user: process.env.DB_USER || "",
        password: process.env.DB_PASSWORD || "",
        dbName: process.env.DB_NAME,
        baseUrl: process.env.MONGO_URI 
    },
    // mongodb+ srv://medfesterm:a6X3kEGY7ToROW2a@clustere.1icdj.mongodb.net/medfest?retryWrites=true&w=majority&appName=Clustere
    


    transport: nodemailer.createTransport({
        host: "smtp.googlemail.com",
        port: 587,
        secure: false, // secure:true for port 465, secure:false for port 587
        auth: {
            user: "medfestng@gmail.com",
            pass: "AYOisrael90"
        }
    }),
    JWT_SECRET: 'HOSSECRETKEY',
    API_BASE_URL: process.env.API_BASE_URL 

};
