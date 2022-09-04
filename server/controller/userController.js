const User = require("../model/userModel");
const brcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
    try {
        console.log(req.body);
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
        console.log(req.body);
        const { username, password } = req.body;
        console.log(username);
        console.log(password);
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({ msg: "User does not exist! Please try again!", status: false });
        }

        const isValid = await brcrypt.compare(password, user.password)
        if(!isValid){
            console.log(user.password)
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
        const user = await User.findByIdAndUpdate(userId, {
            isAvatarImageSet: true,
            avatar: avatar,
            gender: gender,
            aboutme: aboutme,
        }, { new: true })
        return res.json({ status: true, user });
    } catch (e) {
        next(e);
    }
};

module.exports.getContacts = async (req, res, next) => {
    try {
        const users = await User.find({_id:{$ne:req.params.id}}).select([
            "email", "username", "avatar", "id",
        ]);
        return res.json(users);
    } catch (e) {
        next(e);
    }
};