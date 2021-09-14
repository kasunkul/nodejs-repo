const bcrypt = require("bcrypt");
module.exports = {
    up: (queryInterface, Sequelize) => {

        let users = [{
            id: 1,
            password: 'luckyshine001',
            email: 'u1@luckyshine.xyz',
            name: 'u1@luckyshine.xyz'
        }, {
            id: 2,
            password: 'luckyshine002',
            email: 'u2@luckyshine.xyz',
            name: 'u1@luckyshine.xyz'
        }, {
            id: 3,
            password: 'luckyshine003',
            email: 'u1@luckyshine.xyz',
            name: 'u1@luckyshine.xyz'
        }, {
            id: 4,
            password: 'luckyshine004',
            email: 'u2@luckyshine.xyz',
            name: 'u1@luckyshine.xyz'
        }, {
            id: 5,
            password: 'luckyshine005',
            email: 'u1@luckyshine.xyz',
            name: 'u1@luckyshine.xyz'
        }, {
            id: 6,
            password: 'luckyshine006',
            email: 'u2@luckyshine.xyz',
            name: 'u1@luckyshine.xyz'
        }];

        /***Encrypt user passwords */
        users.forEach(user => {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(user.password, salt);
            user.password = hash;
        });

        return queryInterface.bulkInsert('users', users);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};