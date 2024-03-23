import { Router } from 'express';
import matchRoutes from '@controllers/FootMatch.js';
import competitionRoutes from '@controllers/Competition.js';
import statsRoutes from '@controllers/Stats.js';
import userRoutes from '@controllers/User.js';

const router = Router();

router.use(matchRoutes);
router.use(competitionRoutes);
router.use(statsRoutes);
router.use(userRoutes);

export default router;
