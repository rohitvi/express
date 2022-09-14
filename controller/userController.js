const User = require('../model/userModel');

exports.home = (req, res) => {
    const user = new User();
    user.getUser().then(([rows]) => {
        console.log(rows)
    }).catch(err => {
        console.log(err)
    });
}

exports.login = (req, res) => {
    const { username, password } = req.body
    const user = new User(null, username, password)
    user.login().then(([rows]) => {
        console.log(rows)
    }).catch(err => {
        console.log(err)
    })
}