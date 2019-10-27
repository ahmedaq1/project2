module.exports = function(sequelize, DataTypes) {
    var Teachers = sequelize.define("Teachers", {
        // Giving the Parent model a name of type STRING
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
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
            validate: {
                len: [5]
            }
        },
        subject: DataTypes.STRING,
        level: DataTypes.STRING

    });

    //     Teacher.associate = function(models) {
    //         // Associating Parent with Posts
    //         // When an Parent is deleted, also delete any associated Student
    //         Parent.hasMany(models.Student, {
    //             onDelete: "cascade"
    //         });
    //     };

    return Teachers;
};