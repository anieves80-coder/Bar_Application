const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');
const User = mongoose.model('users');
const Saved = mongoose.model('drinks');

//Adds the users mongo assigned ID to a cookie.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//Grabs the ID from the cookie and searches the
//db for the users googleID and sets the user.
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user));
});

//Declare and set the Google strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {          
        
        const existingUser = await User.findOne({googleId: profile.id});
        
        if(existingUser)            
            return done(null, existingUser);        
        
        const collectionsId = await new Saved().save();        
        const user = await new User({ googleId: profile.id, savedCollectionsId: collectionsId.id }).save();        
        done(null, user);
                
    })
);  
