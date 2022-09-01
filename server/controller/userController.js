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
        delete user.password;
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
        delete user.password;
        return res.json({ status: true, user });
    } catch (e) {
        next(e);
    }

};