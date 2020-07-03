const mongoose = require('/Users/erincostello/Desktop/Weather-It/soloo/secret/server/models/db.js');

const Schema = mongoose.Schema;

const PasswordModel = new Schema ({
  password: {type: String, required: true}
});

module.exports = mongoose.model('Password', PasswordModel);