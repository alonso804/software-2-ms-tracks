import express, { Request, Response } from 'express';
import TrackModel from './models/track';
import { connect } from 'mongoose';

connect("")
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('Error connecting to database', err);
  });

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/get-track', async (req: Request, res: Response) => {
  const name = req.body.name;
  // console.log(await TrackModel.find({}).limit(10));
  const track = await TrackModel.findByName(name);

  if (!track) {
    return res.status(404).send('Track not found');
  }

  return res.status(200).json(track);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
