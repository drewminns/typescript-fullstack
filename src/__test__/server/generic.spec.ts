import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';

import TestServer from '../testServer';
import { RootController } from '../../server/controllers/Root';
import { Logger } from '@overnightjs/logger';

describe('RootController', () => {
  const genericAuthController = new RootController();
  let agent: SuperTest<Test>;
  const { SUCCESS_MSG, PARAM_MSG, PARAM_MSG_ERROR } = RootController;
  const NAME = 'Drew';

  beforeAll(done => {
    const server = new TestServer();
    server.setController(genericAuthController);
    agent = supertest.agent(server.getExpressInstance());
    done();
  });

  describe('API: "/api"', () => {
    it('should return successfully', done => {
      agent.get('/api').end((err, res) => {
        if (err) {
          Logger.Err(err, true);
        }
        expect(res.status).toBe(200);
        done();
      });
    });

    it('should return a payload', done => {
      agent.get('/api').end((err, res) => {
        if (err) {
          Logger.Err(err, true);
        }
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: SUCCESS_MSG });
        done();
      });
    });
  });

  describe('API: "/api/sayhello"', () => {
    it('should return the corrent payload when a name is passed in', done => {
      agent.get(`/api/sayhello?name=${NAME}`).end((err, res) => {
        if (err) {
          Logger.Err(err, true);
        }
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: PARAM_MSG + NAME });
        done();
      });
    });

    it('should return an error when a name query is not passed in', done => {
      agent.get(`/api/sayhello`).end((err, res) => {
        if (err) {
          Logger.Err(err, true);
        }
        expect(res.status).toBe(400);
        expect(res.body).toEqual({ error: PARAM_MSG_ERROR });
        done();
      });
    });
  });
});
