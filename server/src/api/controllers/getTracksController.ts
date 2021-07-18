import { Request, Response } from 'express';

import { Controller } from './controller';
import { Track } from '../../contexts/track/Track';

export class getTracksController implements Controller {
  async run(req: Request, res: Response) {
    try {
      const list = await Track.list();
      res.status(200).send(list);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
