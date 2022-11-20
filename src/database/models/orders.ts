import { DataTypes } from 'sequelize';
import { connection } from '../db';

const orderModel = connection.define('orders', {
  order_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerReport: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  warrantyAndNotes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  serviceValue: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  sparePartsValue: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  finishedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

function createTableOrder(order: any) {
  return order.sync({ force: false }).then(() => {
    console.log('*******Order of Service table successfully created*******');
  });
}

export { orderModel, createTableOrder };
