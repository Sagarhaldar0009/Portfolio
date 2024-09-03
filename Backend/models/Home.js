import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema({
    profileUrl: {
        type : String,
        required: true
    }
});

export default mongoose.model('Home', homeSchema);