require('dotenv').config()
import config from 'config';
import validateEnv from '#root/helpers/validateEnv';
import bodyParser from "body-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

validateEnv();

const PORT = config.get<number>('port');

const startServer = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ message: err.message });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.info(`backend service listening on ${PORT}`);
  });
};

export default startServer;