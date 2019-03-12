export default function(sequelize, DataTypes) {
    return sequelize.define('CategoryTool', {
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
        idCategory: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Categories',
                key: 'Id'
            },
            field: 'IdCategory'
        }
    });
}