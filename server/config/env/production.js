"use strict";
var nodemailer = require('nodemailer');

var protocol = process.env.protocol || "https",
    host = process.env.HOST || "localhost",
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
        dbName: process.env.DB_DATABASE || "HOS",
        baseUrl: process.env.MONGODB_URI || `mongodb://localhost:/HOS`
    },

    transport: nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.googlemail.com",
        port: process.env.SMTP_PORT || 587,
        secure: false, // secure:true for port 465, secure:false for port 587
        auth: {
            user: process.env.SMTP_USER || "medfestng@gmail.com",
            pass: process.env.SMTP_PASS || "AYOisrael90"
        }
    }),
    JWT_SECRET: process.env.JWT_SECRET || 'HOSSECRETKEY'

};
