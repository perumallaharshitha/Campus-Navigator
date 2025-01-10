const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const CampyModel = mongoose.model('User', userSchema);

module.exports = CampyModel;