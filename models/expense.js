'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Expense.belongsTo(models.Budget)
    }
  };
  Expense.init({
    amount_expense: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
    category: {
      allowNull: false,
      defaultValue: null,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Expenses',
  });
  return Expense;
};