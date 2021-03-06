const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const ScoreSchema = require('./Score')

const UserSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minLength: 2,
      },
      scores: [ScoreSchema]
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
  
UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;