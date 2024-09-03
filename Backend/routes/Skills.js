import express from 'express';
import Skill from '../models/Skills.js';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Create a new skill
router.post('/add', async (req, res) => {
  const { name, image } = req.body;
  const skill = new Skill({ name, image });

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Delete a skill by ID
router.delete('/:id', async (req, res) => {
    try {
      const skill = await Skill.findById(req.params.id);
      if (!skill) {
        return res.status(404).json({ message: 'Skill not found' });
      }
  
      await Skill.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});


export default router;