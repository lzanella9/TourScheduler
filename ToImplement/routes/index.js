import { Router } from 'express';
import eventRoutes from './event.js';

const router = Router();

router.use('/event', eventRoutes);

export default router;
