module.exports.homelist = function(req, res) {
    res.render('locations-list',{title:'homepage'});
};
module.exports.locationInfo = function(req, res) {
    res.render('location-info',{title:'locationInfo'});
};
// module.exports.addReview = function(req, res) {
//     res.render('location-review-form',{title:'Add Review'});
// };
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Add Review',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};
