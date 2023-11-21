const RoleService = require('../services/roles.service');

class RoleController {
    async getRoles(req, res) {
        const name = req.query.name;
        const exact = req.query.exact;

        let rolesData;

        if (name) {
            rolesData = await RoleService.findRoleByQuery(name, exact);
        } else {
            rolesData = await RoleService.getRoles();
        }

        if (rolesData) {
            return res.status(200).send(rolesData);
        } else {
            return res.status(500).send({
                message: 'Cant get roles',
            });
        }
    }
    async createRole(req, res) {
        const role = await RoleService.createRole(req.body.name);

        if (role) {
            return res.status(200).send(role);
        } else {
            return res.status(500).send({
                message: 'Can`t create role',
            });
        }
    }
    async updateRole(req, res) {
        const updatedRole = await RoleService.updateRole(req.body);

        if (updatedRole) {
            return res.status(200).send({
                affectedItems: updatedRole,
            });
        } else {
            return res.status(500).send({
                message: 'Can`t update role',
            });
        }
    }

    async deleteRole(req, res) {
        const roleId = req.body.id;

        const deleted = await RoleService.deleteRole(roleId);

        if (deleted) {
            return res.status(200).send({
                affectedItems: deleted,
            });
        } else {
            return res.status(500).send({
                message: "Role doesn't exist",
            });
        }
    }

    async getRole(req, res) {
        const rodeId = req.params.id;

        const role = await RoleService.getRole(rodeId);

        if (role) {
            return res.status(200).send(role);
        } else {
            return res.status(500).send({
                message: 'Can`t find role',
            });
        }
    }
}

module.exports = new RoleController();
