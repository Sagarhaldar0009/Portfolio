import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Skill', SkillSchema);

// const Skill = mongoose.model('Skill', SkillSchema);
// export default Skill;
