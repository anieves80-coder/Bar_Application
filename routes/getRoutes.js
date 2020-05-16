const mongoose = require('mongoose');
const User = mongoose.model('users');
const Saved = mongoose.model('drinks');

module.exports = app => {

    const mustBeLoggedIn = (req, res, next) => {          
        if(req.user)            
            return next();        
        return;
    }

    app.get('/api/getAllSaved', mustBeLoggedIn, async (req,res) => {
        
        const {savedCollectionsId} = await User.findOne({_id: req.user.id});
        const drinks = await Saved.findOne({_id:savedCollectionsId});        
        res.send(drinks.savedDrinks);

    });

    
}