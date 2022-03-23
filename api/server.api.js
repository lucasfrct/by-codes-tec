require('dotenv/config');
require('module-alias/register');

const express = require('express');

const logger = require('./src/shared/logger')
const Routes = require('./src/v1');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", Routes);

app.get("/healthz", (req, res) => { res.send("UP"); });

app.listen(process.env.API_PORT,()=>{
  logger.info(`port: ${process.env.API_PORT}`);
  logger.info(`hostname: ${process.env.HOSTNAME} API`);
  logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);
});