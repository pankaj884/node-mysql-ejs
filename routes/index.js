module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `users` ORDER BY id ASC";
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Demo | View Users"
                ,users: result
            });
        });
    },
};
