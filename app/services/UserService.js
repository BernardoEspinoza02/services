const User = require('./../services/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
}

/*class UserService {
    constructor (id, username, name, bio ){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio

    }
}*/

module.exports = UserService