const passport = require('passport');

module.exports = app => {
    
    //Start the passport flow using the Google stategy.
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    //Have passport handle the callback after login.
    app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
        res.redirect("/");
    });

    //Logs user out.
    app.get('/api/logout', (req, res) => {        
        req.logout();        
        res.redirect("/");
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};