import { Controller, Get } from '@overnightjs/core';
import { Server } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('api')
export class RootController extends Server {
  public static readonly SUCCESS_MSG = 'hello';
  public static readonly PARAM_MSG = 'hello ';
  public static readonly PARAM_MSG_ERROR = 'name not provided';

  @Get('')
  private handleRootRequest(req: Request, res: Response): void {
    res.status(200).json({ message: RootController.SUCCESS_MSG });
  }

  @Get('sayhello')
  private handleParam(req: Request, res: Response): void {
    const { name } = req.query;
    if (!name) {
      res.status(400).send({ error: RootController.PARAM_MSG_ERROR });
      return;
    }
    res.status(200).json({ message: RootController.PARAM_MSG + name });
  }
}
