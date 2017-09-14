module.exports = function(sequelize, Sequelize) {
    // Creates a "student" model that matches up with DB
    var student = sequelize.define('student', {
        studentId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FirstName: {
            type: Sequelize.STRING
        },
        LastName: {
            type: Sequelize.STRING
        },
        Level: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    return student;
}