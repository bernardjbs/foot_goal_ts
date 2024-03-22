import express, { Request, Response } from 'express';

// Import your Competition model here
import Competition from '@models/Competition.js';

const router = express.Router();

// GET all competitions
router.get('/competitions', async (req: Request, res: Response) => {
  try {
    const competitions = await Competition.findAll();
    res.json(competitions);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single competition by ID
router.get('/competition/:id', async (req: Request, res: Response) => {
  try {
    const competition = await Competition.findByPk(req.params.id);
    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }
    res.json(competition);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new competition
router.post('/competition', async (req: Request, res: Response) => {
  try {
    const competition = await Competition.create(req.body);
    res.status(201).json(competition);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update an existing competition
router.put('/competition/:id', async (req: Request, res: Response) => {
  try {
    const competition = await Competition.findByPk(req.params.id);
    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }
    await competition.update(req.body);
    res.json(competition);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE delete an existing competition
router.delete('/competition/:id', async (req: Request, res: Response) => {
  try {
    const competition = await Competition.findByPk(req.params.id);
    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }
    await competition.destroy();
    res.json({ message: 'Competition deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
