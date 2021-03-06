const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user){
            const userData = User.findOne({ _id: context.user._id })
            .select('-__v -password');

            return userData
            }
            throw new AuthenticationError('Not logged in!')
        },
        users: async (parent, args, context) => {
            return await User.find({})
          }
      },
    
    
      Mutation: {
        register: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
    
        signin: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, username: username };
        },
    
        saveScore: async (parent, {totalScore, holesScore, userID, createdAt}, context) => {
          if (context.user) {
              const updatedUser = await User
              .findOneAndUpdate(
                  {_id: context.user._id},
                  {$addToSet: {scores: { totalScore, holesScore, userID, createdAt} } },
                  { new: true}
              );
              return updatedUser
          }
          throw new AuthenticationError('You need to be logged in!')
      },
    
      },
};

module.exports = resolvers