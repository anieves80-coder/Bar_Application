const mongoose = require('mongoose');
const { Schema } = mongoose;


const drinkSchema = new Schema({

    userId: String,
    savedDrinks: {
        type: [{        
        drinkId: Number,            
        drinkName: String,
        comments: String,
        star: Number,
        drinkImg: String
        }],
        index: {            
            sparse: true
        }
    }
    
});

mongoose.model('drinks', drinkSchema);