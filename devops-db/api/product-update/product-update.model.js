export default function(sequelize, DataTypes) {
    return sequelize.define('ProdutUpdate', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'Id'
        },
        idProduct: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Products',
                key: 'Id'
            },
            field: 'IdProduct'
        },
        name: {
            type: DataTypes.STRING,
            field: 'Name'
        },
        description:{
            type: DataTypes.TEXT('long'),
            field: 'Description'
        },
        info:{
            type: DataTypes.STRING,
            field: 'Info'
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            field: 'Active'
        }
    });
}