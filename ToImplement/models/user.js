import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    required: true
  },
  role: {
    type: String,
    enum: ["Guide", "Audience"],
    required: true
  },
  subscribed: {
    type: Boolean,
    default: false
  }
});
export default mongoose.model('User', userSchema);
