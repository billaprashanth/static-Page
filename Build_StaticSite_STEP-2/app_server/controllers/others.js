module.exports.about = function(req, res) {
    res.render('generic-text',{title:'homepage'});
};
module.exports.signin = function(req, res) {
    res.render('signin',{title:'Sign In'});
};
module.exports.register = function(req, res) {
    res.render('register',{title:'Register'});
};
