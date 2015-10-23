/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function (req, res) {
        res.view();
    },
    create: function (req,res,next) {
        User.create(req.params.all(), function userCreated(err,user) {
            if (err) return next(err);
            res.json(user);
            
        });
    },
    profile: function (req, res, next) {
        User.findOne(req.param('id'), function (err, user) {
            if (err) {
                console.log('something bad happened.');
                next();
            }
            res.json(user);
            console.log('done');
        });
    },
    index: function (req, res, next) {
        User.find(function (err, users) {
            res.json(users);
        });
    },
    fake: function (req, res, next)
    {
        console.log(req.params.all());
        next();
    }
};

