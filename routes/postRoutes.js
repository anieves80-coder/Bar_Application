const mongoose = require('mongoose');
const Saved = mongoose.model('drinks');
const mustBeLoggedIn = require('../middlewares/verifyLogin');

module.exports = app => {

    app.post('/api/delete', mustBeLoggedIn, async (req, res) => {
        const { id } = req.body;
        const {_saved} = req.user;        

        const response = await Saved.findByIdAndUpdate(_saved, {
            $pull: {
                savedDrinks: { _id: id }
            }
        });

        res.end();
    });

    app.post('/api/save', mustBeLoggedIn, async (req, res) => {
                
        const { drinkId } = req.body;        
        const {_saved} = req.user;
        
        //Checks to see if there is a duplicate before saving.
        const duplicateFound = await Saved.findOne({_id: _saved},{ savedDrinks: { $elemMatch: { drinkId: drinkId } } });        
        
        //If there is a duplicate delete it and add the new one with the updated info.
        if (duplicateFound.savedDrinks[0]) {            
            const id = duplicateFound.savedDrinks[0]._id;            
            const response = await Saved.findByIdAndUpdate(_saved, { $pull: { savedDrinks: { _id: id }}});
            await Saved.updateOne({ _id: _saved }, { $push: { savedDrinks: req.body } });         
            res.send({ "status": "updated" });
        } else {            
            //If there is no duplicates then save the drink to the appropiate collection.
            Saved.updateOne({ _id: _saved }, { $push: { savedDrinks: req.body } }, (err, data) => {
                if (err) {
                    console.log(err);
                    res.send({ "status": "error" });
                }                
            });
            res.send({ "status": "ok" });
        }
    });

}