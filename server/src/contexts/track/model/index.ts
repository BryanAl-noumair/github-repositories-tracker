import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema(
  {
    apiId: String,
    name: String,
    owner: String,
    stargazers_count: String,
    forks_count: String,
    open_issues_count: String,
    subscribers_count: String,
    network_count: String
  },
  { timestamps: true }
);

const TracksModel = mongoose.model('Tracks', trackSchema);

export { TracksModel };
