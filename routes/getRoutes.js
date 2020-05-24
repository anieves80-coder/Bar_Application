const mongoose = require('mongoose');
const User = mongoose.model('users');
const Saved = mongoose.model('drinks');
const mustBeLoggedIn = require('../middlewares/verifyLogin');

module.exports = app => {

    app.get('/api/getAllSaved', mustBeLoggedIn, async (req,res) => {        
        const {_saved} = await User.findOne({_id: req.user.id});
        const drinks = await Saved.findOne({_id:_saved});        
        res.send(drinks.savedDrinks);
    });
    
}