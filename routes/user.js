const fs = require('fs');

module.exports = {
    addUserPage: (req, res) => {
        res.render('add-user.ejs', {
            title: "Welcome to Demo | Add a new user",
            message: ''
        });
    },
    addUser: (req, res) => {

        let message = '';
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let password = req.body.password;
        let number = req.body.number;
        let username = req.body.username;

        let usernameQuery = "SELECT * FROM `users` WHERE user_name = '" + username + "'";
                    console.log("******* add user *********",req.body);

        db.query(usernameQuery, (err, result) => {

            if (err) {
                return res.status(500).send(err);
            }

            if (result.length > 0) {
                message = 'Username already exists';

                res.render('add-user.ejs', {
                    message,
                    title: "Welcome to Demo | Add a new user"
                });

            } else {

                let query = "INSERT INTO `users` (first_name, last_name, password, phone_number, user_name) VALUES ('" +
                    first_name + "', '" + last_name + "', '" + password + "', '" + number + "', '" + username + "')";

                    console.log("******* add user *********",query);
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            }
        });
    },
    deleteUser: (req, res) => {
        let userId = req.params.id;
        let deleteUserQuery = 'DELETE FROM users WHERE id = "' + userId + '"';

        db.query(deleteUserQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    }
};