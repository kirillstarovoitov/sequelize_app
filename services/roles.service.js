const db = require("../models");
const Op = require('sequelize').Op;

class RoleService {
    async getRoles() {
        return await db.roles.findAll({
            attributes: ['id', 'name'],
        });
    }

    async createRole(name) {
        const isRoleExists = await db.roles.findAll({ where: { name } });

        if (isRoleExists.length > 0) {
            return null;
        }

        return await db.roles.create({ name });
    }

    async updateRole(role) {
        const isRoleExists = await db.roles.findByPk(role.id);

        if (!isRoleExists) {
            return null;
        }

        return await db.roles.update(
            { ...role },
            {
                where: {
                    id: role.id,
                },
            },
        );
    }

    async deleteRole(roleId) {
        const isRoleExists = await db.roles.findByPk(roleId);

        if (!isRoleExists) {
            return null;
        }

        return await db.roles.destroy({
            where: {
                id: roleId,
            },
        });
    }

    async getRole(roleId) {
        return await db.roles.findByPk(roleId);
    }

    async findRoleByQuery(name, exact) {
        if (exact === 'true') {
            return await db.roles.findAll({ where: { name } });
        } else {
            return await db.roles.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%` },
                },
            });
        }
    }
}

module.exports = new RoleService();
