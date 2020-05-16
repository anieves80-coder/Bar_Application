const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Saved');
require('./services/passport');


mongoose.connect(keys.mongoURI, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(express.static("client/build"));

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/postRoutes')(app);
require('./routes/getRoutes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running and listening on port ${PORT}`));
