const UserModel = require('../models/user');

module.exports = {
    getHomePage: async (req, res) => {
        try {
            let u = await UserModel.forge().fetchAll();
            let result = u.toJSON();
            res.render('index.ejs', {
                title: "Welcome to Demo | View Users",
                users: result
            });
        } catch (err) {
            res.redirect('/');
        }
    },
};