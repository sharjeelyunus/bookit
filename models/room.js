import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Room name'],
        trim: true,
        maxLength: [100, 'Room name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter Room price'],
        maxLength: [5, 'Room name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter Room description']
    },
    address: {
        type: String,
        required: [true, 'Please enter Room address']
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter Room guest capacity']
    },
    numOfBeds: {
        type: Number,
        required: [true, 'Please enter number of beds in room']
    },
    internet: {
        type: Boolean,
        default: false
    },
    breakfast: {
        type: Boolean,
        default: false
    },
    airConditioned: {
        type: Boolean,
        default: false
    },
    petsAllowed: {
        type: Boolean,
        default: false
    },
    roomCleaning: {
        type: Boolean,
        default: false
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        requried: [true, 'Please enter room category'],
        emun: {
            values: [
                'King',
                'Single',
                'Twins'
            ],
            message: 'Please select correct category for room'
        }
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            ratting: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model.Room || mongoose.model('Room', roomSchema);