// Retrieve
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/maps';
// Connect to the db
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log(err);
  }
  console.log('We are connected');
  findDocuments(db, function () {
    db.close();
  });
});

var findDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('sample');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    console.log(err);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};
