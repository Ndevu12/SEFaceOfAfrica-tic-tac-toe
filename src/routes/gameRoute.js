import express from 'express';
import GameController from '../controller/gameController.js';

const router = express.Router();

router.post('/', GameController.createGame);
router.put('/games/:id', GameController.updateGame);
router.get('/games/:id', GameController.getGameById);
router.get('/players/:playerId/games', GameController.getGamesByPlayer);
router.delete('/games/:id', GameController.deleteGameById);

export default router;
