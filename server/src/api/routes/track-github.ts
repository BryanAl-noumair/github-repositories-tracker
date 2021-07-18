import { Router, Request, Response } from 'express';
import { addTrackController } from '../controllers/addTrackController';
import { getTracksController } from '../controllers/getTracksController';

const router = Router();

router.get('/api/track', (req: Request, res: Response) => {
  const controller = new getTracksController();
  return controller.run(req, res);
});

router.post('/api/track', (req: Request, res: Response) => {
  const controller = new addTrackController();
  return controller.run(req, res);
});

export { router as githubTrackerRouter };
