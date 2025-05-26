import mongoose, { Schema } from 'mongoose'

const publisherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    }, {
    timestamps: true,
});
const Publisher = mongoose.model('Publisher', publisherSchema);
export default Publisher;