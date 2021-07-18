import { Request, Response } from 'express';

import { Controller } from './controller';
import { Track } from '../../contexts/track/Track';
import { trackType } from '../../contexts/track/trackType';

export class addTrackController implements Controller {
  async run(req: Request, res: Response) {
    const newTrack: trackType = {
      apiId: req.body.apiId,
      name: req.body.name,
      owner: req.body.owner,
      stargazers_count: req.body.stargazers_count,
      forks_count: req.body.forks_count,
      open_issues_count: req.body.open_issues_count,
      subscribers_count: req.body.subscribers_count,
      network_count: req.body.network_count
    };

    try {
      const track = await Track.create(newTrack);
      res.status(201).send(track);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
