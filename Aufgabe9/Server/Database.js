"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let students;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://kathrinsmongo:hallo12345@kathrin-eia2-k9lfi.mongodb.net/mongoEIA2";
    databaseName = "mongoEIA2";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect); // wird von Mongo bereitgestellt, nach 8 Sek. Time-Out, nach Verbindung handleconnnect aufrufen 
// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e); //Ausgabe Error 
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        students = db.collection("students");
    }
}
function insert(_doc) {
    // try insertion then activate callback "handleInsert"
    students.insertOne(_doc, handleInsert);
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
// try to fetch all documents from database, then activate callback
function findAll(_callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = students.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=Database.js.map