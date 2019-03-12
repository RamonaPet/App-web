/**
 * Sequelize initialization module
 */
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
    Sequelize,
    sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

//db.sequelize.sync({ logging: console.log });

// Insert models below
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');
db.Category = db.sequelize.import('../api/category/category.model');
db.News = db.sequelize.import('../api/news/news.model');
db.Product = db.sequelize.import('../api/product/product.model');
db.ProductTool = db.sequelize.import('../api/product-tool/product-tool.model');
db.ProductUpdate = db.sequelize.import('../api/product-update/product-update.model');
db.Tool = db.sequelize.import('../api/tool/tool.model');
db.Tutorial = db.sequelize.import('../api/tutorial/tutorial.model');
db.TutorialChapter = db.sequelize.import('../api/tutorial-chapter/tutorial-chapter.model');
db.CategoryTool = db.sequelize.import('../api/category-tool/category-tool.model');




db.TutorialChapter.belongsTo(db.Tutorial, { foreignKey: 'IdTutorial' });
db.Tutorial.hasMany(db.TutorialChapter, { foreignKey: 'IdTutorial' });

db.ProductUpdate.belongsTo(db.Product, { foreignKey: 'IdProduct' });
db.Product.hasMany(db.ProductUpdate, { foreignKey: 'IdProduct' });

db.ProductTool.belongsTo(db.Tool, { foreignKey: 'IdTool' });
db.Tool.hasMany(db.ProductTool, { foreignKey: 'IdTool' });

db.ProductTool.belongsTo(db.Product, { foreignKey: 'IdProduct' });
db.Product.hasMany(db.ProductTool, { foreignKey: 'IdProduct' });

db.CategoryTool.belongsTo(db.Tool, { foreignKey: 'IdTool' });
db.Tool.hasMany(db.CategoryTool, { foreignKey: 'IdTool' });

db.CategoryTool.belongsTo(db.Category, { foreignKey: 'IdCategory' });
db.Category.hasMany(db.CategoryTool, { foreignKey: 'IdCategory' });


module.exports = db;