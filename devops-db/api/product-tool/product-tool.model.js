export default function(sequelize, DataTypes) {
    return sequelize.define('ProductTool', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'Id'
        },
        idTool: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Tools',
                key: 'Id'
            },
            field: 'IdTool'
        },
        idProduct: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Products',
                key: 'Id'
            },
            field: 'IdProduct'
        }
    });
}