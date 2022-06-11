const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const ScoreSchema = new Schema(
    {
        totalScore: {
            type: String,
            required: true
        },
        holesScore:[
            {
                type: String,
                required: true
            }
        ],
        userID: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);


module.exports = ScoreSchema