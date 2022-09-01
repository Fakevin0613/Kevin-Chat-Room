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