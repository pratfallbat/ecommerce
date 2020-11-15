const User = require('../models/user');
const MongooseHelper = require('../helper/mongoose');
const jwt = require('jsonwebtoken');
const confg = require('../config/dev');


exports.auth = function (req, res) {
    const {email, password} = req.body;


    if (!password || !email) {
        return res.status(422).send({
            errors: [
                {
                    title: 'Data Missing ',
                    detail: 'Provide Email and Password'
                }
            ]
        })
    }

    User.findOne({ 
        email
    }, function (err, user) {
        if (err) {
            return res.status(422).send({
                errors: MongooseHelper.normalizeErrors(err.errors)
            });
        }

        if (! user) {
            return res.status(422).send({
                errors: [
                    {
                        title: 'Invalid user !',
                        detail: 'User does not exist'
                    }
                ]
            });
        }
            if (user.hasSamePassword(password)) { // return JWT token
console.log('*******************************************************************')
                console.log(user)
                console.log('________________________________________________________________________');

            const token = jwt.sign({
                userId: user.id,
                user: user.email
            }, confg.SECRET, { expiresIn: '1h' });
            console.log('******************TOKEN*************************************************')
            console.log(token)
            console.log('________________________________________________________________________');
            return res.json(token);

        } else {
            return res.status(422).send({
                errors: [
                    {
                        title: 'Wrong Credential !',
                        detail: 'Wrong password entered'
                    }
                ]
            });
        }
    });

}

exports.register = function (req, res) {
    const {username, email, password, passwordConfirmation} = req.body;

    if (!password || !email) {
        return res.status(422).send({
            errors: [
                {
                    title: 'Data Missing ',
                    detail: 'Provide Email and Password'
                }
            ]
        })
    }
    if (password != passwordConfirmation) {
        return res.status(422).send({
            errors: [
                {
                    title: 'Invalid Password ',
                    detail: 'Password do not match'
                }
            ]
        })

    }
    // User.findOne({ email: email });
    // or
    User.findOne({
        email
    }, function (err, existingUser) {
        if (err) {
            return res.status(422).send({
                errors: MongooseHelper.normalizeErrors(err.errors)
            });
        }

        if (existingUser) {
            return res.status(422).send({
                errors: [
                    {
                        title: 'Invalid email',
                        detail: 'User with Email already registered'
                    }
                ]
            });
        }

        const user = new User({username, email, password});
        user.save(function (err) {
            if (err) {
                return res.status(422).send({
                    errors: MongooseHelper.normalizeErrors(err.errors)
                });

            }
            return res.json({'registered': true})
        });

    });


}

exports.authMiddleware = function (req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const user = parseToken(token);
        User.findById(user.userId, function (err, user) {
            if (err) {
                return res.status(422).send({
                    errors: MongooseHelper.normalizeErrors(err.errors)
                });
            }
            if (user) {
                res.locals.user = user;
                next();
            } else {
                return res.status(401).send({
                    errors: [
                        {
                            title: 'Not authorized',
                            detail: 'Need to login to get access'
                        }
                    ]
                });
            }
        });
    }
    else {
        return res.status(401).send({
            errors: [
                {
                    title: 'Not authorized',
                    detail: 'Need to login to get access'
                }
            ]
        });
        
    }
}


function parseToken(token) {
    
return   jwt.verify(token.split(' ')[1], confg.SECRET);
}