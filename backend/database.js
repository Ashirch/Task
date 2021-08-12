
const mongoose = require('mongoose');

const URI = "mongodb+srv://Ashir:cybercrime10@cluster0.6c3zt.mongodb.net/api?retryWrites=true&w=majority";

mongoose.connect(URI)
    .then(db => console.log('Db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;