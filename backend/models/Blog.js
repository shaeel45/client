import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  postedBy: { type: String, required: true },
  likes: { type: String, required: true },
  views: { type: String, required: true }, 
  date: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;