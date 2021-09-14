'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    class task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    };
    task.init({
        name: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING,
        }
    }, {
        sequelize,
        modelName: 'task',
    });
    return task;
};