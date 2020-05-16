const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    savedCollectionsId: String  
});

mongoose.model('users', userSchema);

