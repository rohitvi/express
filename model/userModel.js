const db = require('../db')

module.exports = class User {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    login() {
        const query = "select * from user where username = ?"
        return db.query(query,[this.name])
    }

    getUser() {
        const query = "select * from user"
        return db.query(query)
    }
}