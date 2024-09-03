import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Project', ProjectSchema);
// module.exports = mongoose.model('Project', ProjectSchema);
