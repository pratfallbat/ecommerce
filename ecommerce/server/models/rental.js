const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: {type: String,required: true,max:[128,'Too long,max is 128 charracters'] },
    city: { type: String, required: true, lowercase: true },
    street: { type: String, required: true, min: [4, 'Too short,min is 4 charracter'] },
    category: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    bedrooms: Number,
    description: { type: String, required: true},
    dailyRate: Number,
    shared: Boolean,
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Rental', rentalSchema);