module.exports = function(sequelize, DataTypes) {
    var Volunteer = sequelize.define("Volunteer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [9]
            }
        },
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        area: DataTypes.STRING

    });

    // Student.associate = function(models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Student.belongsTo(models.Parent, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Volunteer;
};