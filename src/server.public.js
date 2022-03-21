require('dotenv/config');
require('module-alias/register');

const express = require('express');

const pino = require('pino')
const pretty = require('pino-pretty')

const stream = pretty({colorize: true, level: 'debug'})
const logger = pino(stream)

const app = express();

app.get("/healthz", (req, res) => {
    res.send("UP");
});

app.listen(process.env.PUBLIC_PORT,()=>{
  logger.info(`port: ${process.env.PUBLIC_PORT}`);
  logger.info(`hostname: ${process.env.HOSTNAME} PUBLIC`);
  logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);
});