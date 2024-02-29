'use strict';
const mongoose = require('mongoose');
const AdmitCardStructureModel = mongoose.model('admit-card-structure', {
  class: {
    type: Number,
    required: true,
    trim: true,
  },
  examType: {
    type: String,
    required: true,
    trim: true,
  },
  stream: {
    type: String,
    required: true,
    trim: true,
  },
  examDate: {},
  examStartTime: {},
  examEndTime: {},
  lastAcceptFees: { type: String },
  admitCardPublishStatus: {
    type: Boolean,
    required: true,
    trim: true,
    enum: [true, false],
    default: false,
  }
});

module.exports = AdmitCardStructureModel;