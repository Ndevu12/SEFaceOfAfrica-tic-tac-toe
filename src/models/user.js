import mongoose, { Schema, Document } from 'mongoose';

/**
 * Interface representing the structure of an admin document.
 */
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
});

userSchema.methods.deletemany = function () {
    return this.deleteMany().exec();
};

const User = mongoose.model('User', userSchema);

export { User };