import mongoose, { Schema, Document } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['admin', 'player'], 
        default: 'player', 
    },
    gamesPlayed: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    totalScore: {
        type: Number,
        default: 0,
    },
});

const User = mongoose.model('User', userSchema);

export { User };
