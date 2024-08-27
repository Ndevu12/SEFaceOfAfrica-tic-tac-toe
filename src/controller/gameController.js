import GameService from '../services/gameService.js';

class GameController {
    static async createGame(req, res) {
        try {
            const { gameNumber, modeType, player1, player1Score, winner } = req.body;
            const player2 = req.body?.player2;
            const player2Score = req.body.player2Score;

            if (!gameNumber || !modeType || !player1 || (modeType === 'multiple' && (!player2 || !player2Score)) || !player1Score || !winner) {
                return res.status(500).json('All fields are required');
            }

            const gameData = {
                gameNumber, 
                modeType, 
                player1,
                score: {
                    player1Score
                }, 
                winner
            }

            if (modeType === 'multiple'){
                gameData.score = {
                    player1Score,
                    player2Score
                }
                gameData.player2 = player2;
            }
            const game = await GameService.createGame(gameData);
            res.status(201).json({ message: 'Game created successfully', game });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Failed to create game', error: error.message });
        }
    }

    static async updateGame(req, res) {
        try {
            const gameId = req.params.id;
            const updateData = req.body;
            const game = await GameService.updateGame(gameId, updateData);
            if (!game) return res.status(404).json({ message: 'Game not found' });
            res.status(200).json({ message: 'Game updated successfully', game });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Failed to update game', error: error.message });
        }
    }

    static async getGameById(req, res) {
        try {
            const gameId = req.params.id;
            const game = await GameService.getGameById(gameId);
            if (!game) return res.status(404).json({ message: 'Game not found' });
            res.status(200).json({ game });
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve game', error: error.message });
        }
    }

    static async getGamesByPlayer(req, res) {
        try {
            const playerId = req.params.playerId;
            const games = await GameService.getGamesByPlayer(playerId);
            res.status(200).json({ games });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Failed to retrieve games', error: error.message });
        }
    }

    static async deleteGameById(req, res) {
        try {
            const gameId = req.params.id;
            const game = await GameService.deleteGameById(gameId);
            if (!game) return res.status(404).json({ message: 'Game not found' });
            res.status(200).json({ message: 'Game deleted successfully' });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Failed to delete game', error: error.message });
        }
    }
}

export default GameController;
