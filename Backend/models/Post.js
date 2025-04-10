import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  location: {
    lat: { type: Number },
    lng: { type: Number },
  },
});

export default mongoose.model('Post', PostSchema);