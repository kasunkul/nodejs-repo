module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tasks', [{
                id: 1,
                name: "Task 1",
                status: "To Do",
            },
            {
                id: 2,
                name: "Task 3",
                status: "Complete",
            },
            {
                id: 3,
                name: "Task 3",
                status: "In Progress",
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('tasks', null, {});
    }
};