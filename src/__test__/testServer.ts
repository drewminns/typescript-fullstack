import * as bodyParser from 'body-parser';
import { Application } from 'express';
import { Server } from '@overnightjs/core';

class TestServer extends Server {
  constructor() {
    super();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  public setController(ctrl: object): void {
    super.addControllers(ctrl);
  }

  public getExpressInstance(): Application {
    return this.app;
  }
}

export default TestServer;
