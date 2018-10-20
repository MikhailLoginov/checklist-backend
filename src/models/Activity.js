const mongoose = require('mongoose');
const { Schema } = mongoose;

const activitySchema = new Schema({

  // TO DO: make correct fields
  postId: {
    type: Schema.ObjectId,
    required: true,
  },
  authorId: {
    type: Schema.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Activity', activitySchema);
