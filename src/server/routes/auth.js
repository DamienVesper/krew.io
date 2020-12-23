// routes/auth.js

// Log utility and request.
const log = require(`../utils/log.js`);
const axios = require(`axios`);
const config = require(`../config/config.js`);

const express = require(`express`);
let router = express.Router();
const xssFilters = require(`xss-filters`);

// Authentication.
const User = require(`../models/user.model.js`);
const passport = require(`passport`);

router.post(`/register`, (req, res, next) => {
    if (!req.body[`register-username`] || !req.body[`register-email`] || !req.body[`register-password`] || !req.body[`register-password-confirm`] ||
        typeof req.body[`register-username`] != `string` || typeof req.body[`register-email`] != `string` || typeof req.body[`register-password`] != `string` || typeof req.body[`register-password-confirm`] != `string`) return res.json({
        errors: `Please fill out all fields`
    });

    if (!/[a-zA-Z]/.test(req.body[`register-username`])) return res.json({
        errors: `Your username must contain at least one letter`
    });

    if (req.body[`register-username`] != xssFilters.inHTMLData(req.body[`register-username`]) || /[^\w\s]/.test(req.body[`register-username`]) || req.body[`register-username`].indexOf(config.whitespaceCharacters) > -1) return res.json({
        errors: `Invalid Username`
    });

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(req.body[`register-email`])) return res.json({
        errors: `Invalid email`
    });

    if (req.body[`register-password`] != xssFilters.inHTMLData(req.body[`register-password`])) return res.json({
        errors: `Invalid Password`
    });

    if (req.body[`register-password`] != req.body[`register-password-confirm`]) return res.json({
        errors: `Passwords do not match`
    });

    if (req.body[`register-password`] < 7 || req.body[`register-password`] > 48) return res.json({
        errors: `Password must be between 7 and 48 characters`
    });

    passport.authenticate(`register`, (err, user, info) => {
        if (err) return res.json({
            errors: err
        });

        let username = user.username ? user.username : ``;

        if (info) {
            User.findOne({
                username
            }).then(user => {
                if (!user) return log(`red`, err);

                let creationIP = req.header(`x-forwarded-for`) || req.connection.remoteAddress;

                user.email = req.body[`register-email`];
                user.creationIP = creationIP;
                user.lastIP = user.creationIP;

                User.findOne({
                    creationIP
                }).then(user => {
                    if (user) return res.json({
                        errors: `You can only create one account`
                    });
                    User.findOne({
                        lastIP: creationIP
                    }).then(user => {
                        if (user) return res.json({
                            errors: `You can only create one account`
                        });

                        axios.get(`https://check.getipintel.net/check.php?ip=${creationIP}&contact=dzony@gmx.de&flags=f&format=json`).then(req, res => {
                            if (!res) {
                                log(`red`, `There was an error checking while performing the VPN check request.`);
                                return res.json({
                                    errors: `There was an error in creating your account`
                                });
                            }

                            if (res.data && res.data.status == `success` && parseInt(res.data.result) == 1) {
                                log(`cyan`, `VPN connection. Preventing account creation by IP: ${socket.handshake.address}.`);
                                return res.json({
                                    errors: `Disable VPN to create an account`
                                });
                            } else {
                                user.save();
                                return res.json({
                                    success: `Succesfully registered`
                                });
                            }
                        });
                    });
                });
            });
        }
    })(req, res, next);
});

router.post(`/login`, (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.json({
            success: `Logged in`
        });
    }
    if (!req.body[`login-user`] || !req.body[`login-password`] ||
        typeof req.body[`login-user`] != `string` || typeof req.body[`login-password`] != `string`) return res.json({
        errors: `Please fill out all fields`
    });


});

router.post(`/changeusername`, (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.json({
            success: `Changed username`
        });
    }
    if (!req.body[`login-user`] || !req.body[`login-password`] ||
        typeof req.body[`login-user`] != `string` || typeof req.body[`login-password`] != `string`) return res.json({
        errors: `Please fill out all fields`
    });

    passport.authenticate(`login`, (err, user, info) => {
        if (err) {
            log(`red`, err);
            return res.json({
                errors: `There was an error in logging into your account`
            });
        }

        if (!user) return res.json({
            errors: `User does not exist`
        });

        req.logIn(user, err => {
            if (err) return res.json({
                errors: err
            });
            return res.json({
                success: `Logged in`
            });
        });
    })(req, res, next);
});

router.get(`/logout`, (req, res, next) => {
    if (req.isAuthenticated()) req.logOut();
    res.redirect(`/`);
});

router.get(`/authenticated`, (req, res, next) => {
    if (req.isAuthenticated()) return res.json({
        isLoggedIn: true,
        username: req.user.username,
        password: req.user.password
    });
    else return res.json({
        isLoggedIn: false
    });
});

module.exports = router;