import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  Name: { type: String, index: true },
  Description: { type: String },
  Date: { type: Date },
  Spot: {type:Number},
  status: {
    type: String,
    enum: ["Published", "Canceled", "Draft"],
    required: true
  }
});

export default mongoose.model('Event', eventSchema);
