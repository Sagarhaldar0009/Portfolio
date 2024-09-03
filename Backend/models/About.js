import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  }
});

export default mongoose.model('About', aboutSchema);