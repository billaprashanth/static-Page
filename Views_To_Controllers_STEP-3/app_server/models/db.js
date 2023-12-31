var mongoose = require('mongoose');
//Set up default mongoose connection
var dbURI  = "mongodb://0.0.0.0:27017/";
mongoose.connect(dbURI); 
mongoose.connection.on('connected', function () {
     console.log('Mongoose connected to ' + dbURI); 
});
mongoose.connection.on('error', function (err) { 
    console.log('Mongoose connection error: ' + err); 
}); 
mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose disconnected'); 
}); 
