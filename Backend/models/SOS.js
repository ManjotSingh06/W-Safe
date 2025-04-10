import mongoose from 'mongoose';

const SOSSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  location: {
    lat: { type: Number },
    lng: { type: Number },
  },
});

export default mongoose.model('SOS', SOSSchema);