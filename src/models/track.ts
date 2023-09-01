import { ReturnModelType, getModelForClass, prop } from "@typegoose/typegoose";

export class Track {
  @prop()
  id: string;

  @prop()
  name: string;

  @prop()
  artists: string;

  @prop()
  duration_ms: string;

  @prop()
  release_date: string;

  @prop()
  year: string;

  @prop()
  acousticness: string;

  @prop()
  danceability: string;

  @prop()
  energy: string;

  @prop()
  instrumentalness: string;

  @prop()
  liveness: string;

  @prop()
  speechiness: string;

  @prop()
  tempo: string;

  @prop()
  valence: string;

  @prop()
  mode: string;

  @prop()
  key: string;

  @prop()
  popularity: string;

  @prop()
  explicit: string;

  static async findByName(
    this: ReturnModelType<typeof Track>,
    name: string
  ) {
    return this.find({ name });
  }
}

const trackModel = getModelForClass(Track);
export default trackModel;
