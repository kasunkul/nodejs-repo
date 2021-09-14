const db = require("../../models");

async function getAll(req, res) {
    try {
        const query = `SELECT * FROM task_board.tasks LIMIT 100;`;

        const data = await db.sequelize.query(query, {
            type: db.sequelize.QueryTypes.SELECT,
        });

        return res.send(data);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

async function getTaskDetail(req, res) {
    try {

        const { id } = req.body;

        const data = await db.task.findOne({
            where: {
                id,
            },
        });

        return res.send(data);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

async function create(req, res) {
    try {
        const { name } = req.body;

        await db.task.create({
            name: name,
            status: "To Do"
        });

        return res.sendStatus(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

async function update(req, res) {
    try {
        const { name, id, status } = req.body;

        const isExists = await db.task.findOne({
            where: {
                id,
            },
        });

        if (isExists) {
            await db.task.update({ name, status }, {
                where: {
                    id,
                },
            });

        }

        return res.send(name);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

async function remove(req, res) {
    try {
        const { id } = req.body;

        const task = await db.task.findOne({
            where: {
                id,
            },
        });

        if (task) {
            task.destroy();
        }

        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}


module.exports = {
    getAll,
    create,
    update,
    getTaskDetail,
    remove
};