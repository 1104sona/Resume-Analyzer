const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  score: Number,

  matchedSkills: [String],

  missingSkills: [String],

  jobMatchScore: Number,

  atsScore: Number,
  
  missingKeywords: [String],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =
  mongoose.model("Resume", ResumeSchema);