// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken, AuthenticationError } = require('../utils/auth');

module.exports = {
    Query: {
        async getSingleUser(parent, args, context) {
            const foundUser = await User.findOne({
                $or: [{ _id: context.user ? context.user._id : args.id }, { username: args.username }],
            });

            if (!foundUser) {
                // return res.status(400).json({ message: 'Cannot find a user with this id!' });
                return null;
            }

            // res.json(foundUser);
            return foundUser;
        },
        async me(parent, args, context) {
            if (!context.user) {
                throw AuthenticationError()
            }
            const user = await user.findOne ({_id: context.user._id});
            console.log(user)
            return User.findOne({
                _id: context.user._id
            })
        }
    },
    Mutation: {
        async createUser(parent, args, context) {
            const user = await User.create(args);

            if (!user) {
                // return res.status(400).json({ message: 'Something is wrong!' });
                return null;
            }
            const token = signToken(user);
            // res.json({ token, user });
            return ({ token, user })
        },
        async login(parent, args, context) {
            const user = await User.findOne({ $or: [{ username: args.username }, { email: args.email }] });
            if (!user) {
                // return res.status(400).json({ message: "Can't find this user" });
                return null;
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
                // return res.status(400).json({ message: 'Wrong password!' });
                return null;
            }
            const token = signToken(user);
            // res.json({ token, user });
            return ({ token, user })
        },
        async saveBook(parent, args, context) {
            console.log(context.user);
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: args } },
                    { new: true, runValidators: true }
                );
                // return res.json(updatedUser);
                return updatedUser
            } catch (err) {
                console.log(err);
                // return res.status(400).json(err);
                return null;
            }
        },
        async deleteBook(parent, args, context) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true }
            );
            if (!updatedUser) {
                // return res.status(404).json({ message: "Couldn't find user with this id!" });
                return null;
            }
            // return res.json(updatedUser);
            return (updatedUser)
        },
    }
}