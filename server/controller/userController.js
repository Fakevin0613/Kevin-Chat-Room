const User = require("../model/userModel");
const brcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const userCheck = await User.findOne({ username });
        const emailCheck = await User.findOne({ email });
        if (userCheck) {
            return res.json({ msg: "Username already used", status: false });
        }
        if (emailCheck) {
            return res.json({ msg: "Email already used", status: false });
        }

        const encodePassword = await brcrypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: encodePassword,
        });        
        return res.json({ status: true, user });
    } catch (e) {
        next(e);
    }

};

module.exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({ msg: "User does not exist! Please try again!", status: false });
        }

        const isValid = await brcrypt.compare(password, user.password)
        if(!isValid){
            return res.json({ msg: "Password Incorrect! Please try again!", status: false });
        }
        return res.json({ status: true, user });
    } catch (e) {
        next(e);
    }

};

module.exports.setpersonal = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const avatar = req.body.avatar;
        const gender = req.body.gender;
        const aboutme = req.body.aboutme;
        const result = await User.findByIdAndUpdate(userId, {
            isAvatarImageSet: true,
            avatar: avatar,
            gender: gender,
            aboutme: aboutme,
        }, { new: true })

        const user = await User.findOneAndUpdate(
            {_id: userId},
            { $addToSet: {friendList: userId}},
            { new: true }
        )
        return res.json({ status: true, user });
    } catch (e) {
        next(e);
    }
};

module.exports.getContacts = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.id);
        const users = await User.find({$nor: [{_id: currentUser.friendList }, {_id: currentUser.requestList }]}).select([
            "email", "username", "avatar", "id", "gender", "aboutme"
        ]);
        return res.json(users);
    } catch (e) {
        next(e);
    }
};

module.exports.getFriends = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.id);
        const users = await User.find({$and: [{_id: {$ne: req.params.id}},{ _id: currentUser.friendList }]}).select([
            "email", "username", "avatar", "id", "gender", "aboutme"
        ]);
        return res.json(users);
    } catch (e) {
        next(e);
    }
};

module.exports.getRequests = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.id);
        const users = await User.find({_id: currentUser.requestList}).select([
            "email", "username", "avatar", "id", "gender", "aboutme"
        ]);
        return res.json(users);
    } catch (e) {
        next(e);
    }
};

module.exports.setRequest = async (req, res, next) => {
    try {
        const targetId = req.body.id;
        const userId = req.params.id
        const result = await User.findOneAndUpdate(
            {_id: targetId},
            { $addToSet: {requestList: userId}},
            { new: true }
        )
        return res.json({ status: true, result });
    } catch (e) {
        next(e);
    }
}

module.exports.setAccept = async (req, res, next) => {
    try {
        const targetId = req.body.id;
        const userId = req.params.id
        const resultRemove = await User.findOneAndUpdate(
            {_id: userId},
            { $pull: {requestList: targetId}},
            { new: true }
        )
        const resultAdd = await User.findOneAndUpdate(
            {_id: userId},
            { $addToSet: {friendList: targetId}},
            { new: true }
        )
        const resultAddBack = await User.findOneAndUpdate(
            {_id: targetId},
            { $addToSet: {friendList: userId}},
            { new: true }
        )
        return res.json({ status: true, resultRemove, resultAdd, resultAddBack });
    } catch (e) {
        next(e);
    }
}

module.exports.setDelete = async (req, res, next) => {
    try {
        const targetId = req.body.id;
        const userId = req.params.id
        const resultAdd = await User.findOneAndUpdate(
            {_id: userId},
            { $pull: {friendList: targetId}},
            { new: true }
        )
        const resultAddBack = await User.findOneAndUpdate(
            {_id: targetId},
            { $pull: {friendList: userId}},
            { new: true }
        )
        return res.json({ status: true, resultAdd, resultAddBack });
    } catch (e) {
        next(e);
    }
}