const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    _saved: {
        type: Schema.Types.ObjectId, ref: 'drinks'
    }
});

mongoose.model('users', userSchema);
