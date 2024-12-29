import mongoose from 'mongoose';

const missionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Mission = mongoose.model("Mission", missionSchema);
export default Mission;