const fs = require('fs');
const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {
    addUserPage: (req, res) => {
        res.render('add-user.ejs', {
            title: "Welcome to Demo | Add a new user",
            message: ''
        });
    },
    addUser: async (req, res) => {

        try {

            let message = '';
            let firstname = req.body.first_name;
            let lastname = req.body.last_name;
            let password = req.body.password;
            let number = req.body.number;
            let username = req.body.username;

            let userExist = await UserModel.forge().query({ where: { user_name: username } }).fetch();

            if (userExist) {
                message = 'Username already exists';

                return res.render('add-user.ejs', {
                    message,
                    title: "Welcome to Demo | Add a new user"
                });
            }

            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);

            await new UserModel({
                first_name: firstname,
                last_name: lastname,
                password: hash,
                phone_number: number,
                user_name: username,
                created_at: new Date()
            }).save();

            res.redirect('/');

        } catch (err) {
            return res.status(500).send(err.message);
        }
    },
    deleteUser: async (req, res) => {

        try {
            let userId = req.params.id;
            let userExist = await UserModel.forge().query({ where: { id: userId } }).fetch();
            if (userExist) {
                userExist.destroy();
            }
            res.redirect('/');
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }
};