module.exports.homelist = function(req, res) {
    res.render('index',{title:'homepage'});
};
module.exports.locationInfo = function(req, res) {
    res.render('index',{title:'locationInfo'});
};
module.exports.addReview = function(req, res) {
    res.render('index',{title:'addReview'});
};

