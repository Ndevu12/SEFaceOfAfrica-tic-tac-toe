import mongoose, { Schema, Document } from 'mongoose';

const gameSchema = new Schema({
    gameNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    modeType: {
        type: String,
        enum: ['single', 'multiple'], 
        default: 'single', 
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    player1: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: function() { return this.modeType === 'multiple'; },
    },
    score: {
        player1Score: {
            type: Number,
            required: true,
            default: 0,
        },
        player2Score: {
            type: Number,
            required: function() { return this.modeType === 'multiple'; },
            default: 0,
        }
    },
    winner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }
});

const Game = mongoose.model('Game', gameSchema);

export { Game };
