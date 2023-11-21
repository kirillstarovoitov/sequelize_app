const db = require("../models");

class UsersService {
    async getUsers() {
        return await db.users.findAll(
            {
                include: [db.roles],
            }
        );
    }

    findById() {
    }

    async getUser(userId){
        return await db.users.findByPk(userId);
    }



    findByEmail(email) {
        return models.users.findOne({where: {email: email}});
    }

    createUser(data) {
        const {firstName, lastName, email, password} = data;

        return new Promise((res, rej) => {
            if (!firstName) {
                rej(new Error('First name is required'));
            }
            if (!lastName) {
                rej(new Error('Last name is required'));
            }
            if (!email) {
                rej(new Error('Email is required'));
            }
            if (!password) {
                rej(new Error('Password is required'));
            }

            res({
                id: 1,
                firstName,
                lastName,
                email,
                password,
            });
        });
    }

    updateUser() {
    }

    deleteUser() {
    }
}

module.exports = new UsersService();
