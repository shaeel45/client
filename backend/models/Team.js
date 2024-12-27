import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  teamMemberName: { type: String, required: true },
  teamMemberPosition: { type: String, required: true },
  teamMemberimgPath: { type: String, required: true },
  teamMemberInsta: { type: String, default: "" },
  teamMemberFacebook: { type: String, default: "" },
  teamMemberLinkedin: { type: String, default: "" },
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);
export default Team;