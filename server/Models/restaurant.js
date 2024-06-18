const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

//schema
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    href: {
        type: String, 
        required: true
    },
    hours: {
        type: String, 
        required: true
    },
    rating: {
        type: Number, 
        required: false
    },
    menu:  {
        type: Array, 
        required: true
    },
    reviews: {
        type: Array, 
        required: false
    }

}, {timestamps: true})

//create useable model based off schema above
const Restaurant = mongoose.model('Restaurant', restaurantSchema); 
module.exports = Restaurant; 