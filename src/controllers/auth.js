const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../../models');


async function login(req, res) {
    try {

        // 1. check whether user exists by email
        const isUserExist = await db.user.findOne({
            where: {
                email: req.body.email
            },
        });

        // if not exist
        if (!isUserExist) {
            return res.sendStatus(401);
        }

        // 2. check whether password matches or not
        const isMatch = bcrypt.compareSync(req.body.password, isUserExist.password);
        if (!isMatch) {
            return res.sendStatus(401);
        }

        // 3. issue a JWT
        const { id } = isUserExist;
        const token = await jwt.sign({
                id,
            },
            'luck_shine'
        );


        return res.status(200).json({
            access_token: token,
            user: {
                data: {
                    name: isUserExist.name,
                    email: isUserExist.email,
                },
            },
        });
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}


module.exports = {
    login
};