import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    image: { 
        type: String, 
        required: true 
    },
    course: { 
        type: String, 
        required: true 
    },
    institute: { 
        type: String, 
        required: true 
    },
    period: { 
        type: String, 
        required: true 
    },
    marks: { 
        type: String, 
        required: true 
    }
});

export default mongoose.model('Education', educationSchema);