const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  tech: { type: String, required: true },
  badge: { type: String, default: 'Intermediate' },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  learningOutcome: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);