import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: String, index: true },
  eventId: { type: String, index: true },
  paymentStatus: {
    type: String,
    enum: ["Active", "Canceled", "Paid"],
    required: true
  },
   status: {
    type: String,
    enum: ["Active", "Inactive"],
    required: true
  }
});

export default mongoose.model('Booking', bookingSchema);
