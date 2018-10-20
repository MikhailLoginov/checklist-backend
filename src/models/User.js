const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

  // TO DO: make correct fields
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
