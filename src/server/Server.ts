import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import express from 'express';
import path from 'path';
import { RootController } from './controllers';

export class AppServer extends Server {
  private SERVER_STARTED = 'Example server started on port: ';

  constructor() {
    super(true);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(helmet.xssFilter());
    this.app.use(express.static(path.join(__dirname, '../client')));
    this.setupControllers();
  }

  start(port: number): void {
    this.app.listen(port, () => {
      Logger.Imp(`${this.SERVER_STARTED} ${port}`);
    });
  }

  private setupControllers(): void {
    const rootController = new RootController();
    super.addControllers([rootController]);
  }
}
