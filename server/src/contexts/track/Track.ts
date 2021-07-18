import { trackType } from './trackType';
import { TracksModel } from './model';

export class Track {
  readonly trackData: trackType;

  constructor(trackData: trackType) {
    this.trackData = trackData;
  }

  static async create(trackData: trackType): Promise<trackType> {
    return TracksModel.findOneAndUpdate({ apiId: trackData.apiId }, trackData, {
      upsert: true
    });
  }

  static async list(): Promise<Array<trackType>> {
    return TracksModel.find();
  }
}
