export default function(sequelize, DataTypes) {
    return sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'Id'
        },
        name: {
            type: DataTypes.STRING,
            field: 'Name'
        },
        info:{
            type: DataTypes.STRING,
            field: 'Info'
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            field: 'Active'
        },
        image:{
            type: DataTypes.TEXT('long'),
            field: 'Image'
        },
    });
}