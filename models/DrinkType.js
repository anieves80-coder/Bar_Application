const mongoose = require('mongoose');
const { Schema } = mongoose;


const drinkTypeSchema = new Schema({        
          
    drinkId: Number,            
    drinkName: String,
    comments: String,
    star: Number,
    drinkImg: String    
        
});

module.exports = drinkTypeSchema;