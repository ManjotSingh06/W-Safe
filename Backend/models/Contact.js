import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  type: String, // NGO or Helpline
  contact_numbers: [String],
  email: String,
  website: String,
  address: String,
  services_offered: [String],
  location: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" }
  }
});

export default mongoose.model("Contact", contactSchema);
