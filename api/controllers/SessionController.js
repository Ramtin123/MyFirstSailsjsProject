/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function (req, res) {
        console.log(req.session)
        res.view('session/new');
    },
    login: function (req, res, next) {
        var oldDatObj = new Date();
        var newDateObj = new Date(oldDatObj.getTime() + 60000)
        req.session.cookie.expires = newDateObj;
        req.session.authenticated = true;
        console.log(req.param('name'));
        console.log(req.param('password'));
        res.redirect('session/new');
    }

};

