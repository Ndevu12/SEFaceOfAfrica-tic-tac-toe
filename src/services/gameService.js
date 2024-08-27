import { Game } from '../models/game.js';

class GameService {
    static async createGame(gameData) {
        const game = new Game(gameData);
        await game.save();
        return game;
    }

    static async updateGame(gameId, updateData) {
        const game = await Game.findByIdAndUpdate(gameId, updateData, { new: true });
        return game;
    }

    static async getGameById(gameId) {
        const game = await Game.findById(gameId);
        return game;
    }

    static async getGamesByPlayer(playerId) {
        const games = await Game.find({ $or: [{ player1: playerId }, { player2: playerId }] });
        return games;
    }

    static async deleteGameById(gameId) {
        const game = await Game.findByIdAndDelete(gameId);
        return game;
    }
}

export default GameService;
