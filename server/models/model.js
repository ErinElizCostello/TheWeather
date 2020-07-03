const mongoose = require('/Users/erincostello/Desktop/Weather-It/soloo/secret/server/models/db.js');

const Schema = mongoose.Schema;

const NewUploadModel = new Schema ({
  who: {type: String, required: true},
  what: {type: String, required: true},
  when: {type: String, required: true},
  where: {type: String, required: true},
  why: {type: String, required: true}
});

module.exports = mongoose.model('NewUpload', NewUploadModel);