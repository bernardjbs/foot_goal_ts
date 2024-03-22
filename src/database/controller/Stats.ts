import express, { Request, Response } from 'express';

import Stats from '@models/Stats.js';
import Match from '../models/FootMatch.js';

const router = express.Router();

// GET all stats
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const stats = await Stats.findAll();
    res.json(stats);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single stats by ID
router.get('/stats/:id', async (req: Request, res: Response) => {
  try {
    const stats = await Stats.findByPk(req.params.id);
    if (!stats) {
      return res.status(404).json({ message: 'Stats not found' });
    }
    res.json(stats);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new stats
router.post('/stats', async (req: Request, res: Response) => {
  try {
    const stats = await Stats.create(req.body);
    res.status(201).json(stats);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update an existing stats for a match
router.put('/stats/:matchId/team/:team', async (req: Request, res: Response) => {
  const matchId = req.params.matchId;
  const team = req.params.team;

  try {
    const match = await Match.findByPk(matchId, {
      include: [{ model: Stats }]
    });

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    const updatedRowsCount = await Stats.update(req.body, {
      where: { matchId, statsFor: team }
    });

    if (updatedRowsCount[0] === 0) {
      return res.status(404).json({ message: 'No matching stats found for home team' });
    }

    res.status(200).json({ message: 'Match home team stats updated successfully' });
  } catch (error) {
    console.error('Error updating match home team stats:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE delete an existing stats for match
router.delete('/stats/:matchId', async (req: Request, res: Response) => {
  try {
    const { matchId } = req.params;

    const deletedRowsCount = await Stats.destroy({
      where: { matchId }
    });

    res.status(200).json({ deletedRowsCount });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
