import express, { Request, Response } from 'express';

import Match from '@models/FootMatch.js';

const router = express.Router();

// GET all matches
router.get('/matches', async (req: Request, res: Response) => {
  try {
    const matches = await Match.findAll();
    res.json(matches);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single match by ID
router.get('/match/:id', async (req: Request, res: Response) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }
    res.json(match);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new match
router.post('/match', async (req: Request, res: Response) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).json(match);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update an existing match
router.put('/match/:id', async (req: Request, res: Response) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }
    await match.update(req.body);
    res.json(match);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE delete an existing match
router.delete('/match/:id', async (req: Request, res: Response) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }
    await match.destroy();
    res.status(200).json({ message: 'Match deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
