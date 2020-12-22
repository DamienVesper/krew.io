const bcrypt = require(`bcrypt`);
const User = require(`./models/user.model.js`);

const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// Strategy.
passport.use(
    new LocalStrategy({
        usernameField: `username`
    }, (username, password, done) => {
        User.findOne({
            username
        }).then(user => {
            if (!user) {
                // Register a user.
                let registerUser = new User({
                    username,
                    creationIP: null,
                    lastIP: null,
                    creationDate: new Date(),
                    password,
                    highscore: 0,
                    clan: null,
                    clanRequest: null
                });
                bcrypt.genSalt(15, (err, salt) => bcrypt.hash(registerUser.password, salt, (err, hash) => {
                    if (err) return log(`red`, err);

                    registerUser.password = hash;
                    registerUser.save().then(user => done(null, user))
                        .catch(err => done(null, false, {
                            message: err
                        }));
                }));
            } else {
                // Login a user.
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) return log(`red`, err);

                    if (isMatch) return done(null, user);
                    else return done(null, false, {
                        message: `Incorrect username / password`
                    })
                });
            }
        }).catch(err => {
            return done(null, false, {
                message: err
            });
        });
    }));

module.exports = passport;