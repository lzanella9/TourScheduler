import Event from '../models/event.js';
import { Router } from 'express';

const router = Router();
// GET all tours
router.get('/',async (req, res) => {
  const tours = await Event.find();
  res.json(tours);
});

// GET single tour
router.get('/:id',async (req, res) => {
  const tour = await Event.findById(req.params.id);
  if (!tour) return res.status(404).json({ message: 'Tour not found' });
  res.json(tour);
});

// POST create tour
router.post('/', async (req, res) => {
  const tour = new Event(req.body);
  await tour.save();
  res.status(201).json(tour);
});

// PUT update tour
router.put('/:id', async (req, res) => {
  const tour = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(tour);
});

// DELETE tour
router.delete('/:id',async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.status(204).send();
});
export default router;