import express from 'express';
const router = express.Router();
// const Experience = require('../models/Experience');
import Experience from "../models/Experience.js"

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new experience
router.post('/add', async (req, res) => {
  const experience = new Experience({
    company: req.body.company,
    position: req.body.position,
    period: req.body.period,
    location: req.body.location, // Include location field
  });

  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an experience
router.put('/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (experience) {
      experience.company = req.body.company || experience.company;
      experience.position = req.body.position || experience.position;
      experience.period = req.body.period || experience.period;
      experience.location = req.body.location || experience.location; // Update location field

      const updatedExperience = await experience.save();
      res.json(updatedExperience);
    } else {
      res.status(404).json({ message: 'Experience not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an experience
router.delete('/:id', async (req, res, next) => {
    try {
      const experience = await Experience.findById(req.params.id);
      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }
  
      await experience.deleteOne(); // Correct method to delete the document
      res.json({ message: 'Experience deleted' });
    } catch (err) {
      next(err); // Pass the error to the error handling middleware
    }
  });

export default router;
