const UsersService = require('../services/users.service');

class UsersController {
    async getUsers(req, res) {

        const usersData = await UsersService.getUsers();
        console.log('usersData',usersData)

        if (usersData) {
            return res.status(200).send(usersData);
        } else {
            return res.status(500).send({
                message: 'Cant get users.',
            });
        }
    }

    createUser(req, res) {
    }

    updateUser(req, res) {
    }

    deleteUser(req, res) {
    }

    async getUser(req, res) {
        const userId = req.params.id;
        const usersData = await UsersService.getUser(userId);

        console.log('usersData',usersData)

        if (usersData) {
            return res.status(200).send(usersData);
        } else {
            return res.status(500).send({
                message: 'Cant get user.',
            });
        }
    }
}

module.exports = new UsersController();
