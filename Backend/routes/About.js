import express from 'express';
const router = express.Router();
import About from "../models/About.js"


// Create a new About entry
router.post('/add', async (req, res) => {
  const { position, description, email, place, imageUrl, resume } = req.body;

  try {
    const newAbout = new About({ position, description, email, place, imageUrl, resume });
    await newAbout.save();
    res.status(201).json(newAbout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get all About entries
router.get('/', async (req, res) => {
  try {
    const abouts = await About.find();
    res.status(200).json(abouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get a single About entry by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const about = await About.findById(req.params.id);
//     if (!about) {
//       return res.status(404).json({ message: 'About entry not found' });
//     }
//     res.status(200).json(about);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// Update an About entry
router.put('/:id', async (req, res) => {
  const { position, description, email, place, imageUrl, resume } = req.body;

  try {
    const about = await About.findById(req.params.id);
    if (!about) {
      return res.status(404).json({ message: 'About entry not found' });
    }

    about.position = position ?? about.position;
    about.description = description ?? about.description;
    about.email = email ?? about.email;
    about.place = place ?? about.place;
    about.imageUrl = imageUrl ?? about.imageUrl;
    about.resume = resume ?? about.resume;

    await about.save();
    res.status(200).json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Delete an About entry
router.delete('/:id', async (req, res) => {
  try {
    const about = await About.findById(req.params.id);
    if (!about) {
      return res.status(404).json({ message: 'About entry not found' });
    }

    await about.remove();
    res.status(200).json({ message: 'About entry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;