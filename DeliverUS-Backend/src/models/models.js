import Sequelize from 'sequelize'
import getEnvironmentConfig from '../config/config.js'
import loadRestaurantModel from './Restaurant.js'
import loadOrderModel from './Order.js'
import loadProductModel from './Product.js'
import loadProductCategoryModel from './ProductCategory.js'
import loadRestaurantCategoryModel from './RestaurantCategory.js'
import loadUserModel from './User.js'
// Needed for statement
import loadPerformanceModel from './Performance.js'

const sequelizeSession = new Sequelize(getEnvironmentConfig().database, getEnvironmentConfig().username, getEnvironmentConfig().password, getEnvironmentConfig())
const Restaurant = loadRestaurantModel(sequelizeSession, Sequelize.DataTypes)
const Order = loadOrderModel(sequelizeSession, Sequelize.DataTypes)
const Product = loadProductModel(sequelizeSession, Sequelize.DataTypes)
const ProductCategory = loadProductCategoryModel(sequelizeSession, Sequelize.DataTypes)
const RestaurantCategory = loadRestaurantCategoryModel(sequelizeSession, Sequelize.DataTypes)
const User = loadUserModel(sequelizeSession, Sequelize.DataTypes)
// Needed for statement
const Performance = loadPerformanceModel(sequelizeSession, Sequelize.DataTypes)

// Needed for statement
const db = { Restaurant, Order, Product, ProductCategory, RestaurantCategory, User, Performance }

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// Needed for statement
export { Performance, Restaurant, Order, Product, ProductCategory, RestaurantCategory, User, sequelizeSession }
