const mongoose = require('mongoose');
const { Schema } = mongoose;
const DrinkType = require('./DrinkType');


const drinkSchema = new Schema({
    
    savedDrinks: {
        type: [DrinkType],
        index: {            
            sparse: true
        }
    }
    
});

mongoose.model('drinks', drinkSchema);