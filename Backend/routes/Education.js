import express from 'express';
const router = express.Router();
import Education from "../models/Education.js"


// Get all educations
router.get('/', async (req, res) => {
    try {
      const educations = await Education.find();
      res.json(educations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});


// Create a new education
router.post('/add', async (req, res) => {
    const { image, course, institute, period, marks } = req.body;
    try {
      const newEducation = new Education({ image, course, institute, period, marks });
      await newEducation.save();
      res.status(201).json(newEducation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});


// Update an education by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { image, course, institute, period, marks } = req.body;
    try {
      const updatedEducation = await Education.findByIdAndUpdate(
        id,
        { image, course, institute, period, marks },
        { new: true, runValidators: true }
      );
      if (!updatedEducation) {
        return res.status(404).json({ message: 'Education not found' });
      }
      res.json(updatedEducation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});


// Delete an education by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedEducation = await Education.findByIdAndDelete(id);
      if (!deletedEducation) {
        return res.status(404).json({ message: 'Education not found' });
      }
      res.json({ message: 'Education deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});



export default router;