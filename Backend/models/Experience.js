import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  company: { 
    type: String, 
    required: true 
  },
  position: { 
    type: String, 
    required: true 
  },
  period: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  }, // Add location field
});

export default mongoose.model('Experience', experienceSchema);
