import express from 'express';
import Home from '../models/Home.js'; // Adjust the path if necessary

const router = express.Router();


// Create a new Home entry (POST)
router.post('/add', async (req, res) => {
  const { profileUrl } = req.body;

  try {
    const newHome = new Home({ profileUrl });
    await newHome.save();
    res.status(201).json(newHome);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get all Home entries (GET)
router.get('/', async (req, res) => {
  try {
    const homeEntries = await Home.find();
    res.status(200).json(homeEntries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Update a Home entry by ID (PUT)
router.put('/:id', async (req, res) => {
  const { profileUrl } = req.body;

  try {
    const homeEntry = await Home.findById(req.params.id);
    if (!homeEntry) {
      return res.status(404).json({ message: 'Home entry not found' });
    }

    homeEntry.profileUrl = profileUrl ?? homeEntry.profileUrl;

    await homeEntry.save();
    res.status(200).json(homeEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
