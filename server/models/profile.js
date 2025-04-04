const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    scAggregate: { type: Number, required: true },
    hscAggregate: { type: Number, required: true },
    selectedSCSubjects: { type: [String], required: true }, 
    selectedHSCSubjects: { type: [String], required: true },
    recommendations: [
        {
            name: { type: String, required: true },
            minScore: { type: Number, required: true },
            location: { type: String, required: true }
        }
    ]
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);

module.exports = ProfileModel;
