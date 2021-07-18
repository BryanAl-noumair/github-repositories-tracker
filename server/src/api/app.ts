import express from 'express';
const cors = require('cors');
import { json } from 'body-parser';
import { githubTrackerRouter } from './routes/track-github';

const app = express();
app.use(cors());
app.use(json());

app.use(githubTrackerRouter);

export default app;
