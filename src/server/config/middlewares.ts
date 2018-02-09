import { json, urlencoded } from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { Application } from 'express';
import * as session from 'express-session';
import { initialize, session as passportSession } from 'passport';
import { IEnvironmentConfig } from './config';

module.exports = (config: IEnvironmentConfig, app: Application) => {
  app.use(cookieParser());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true
  }));
  app.use(initialize());
  app.use(passportSession());
};
