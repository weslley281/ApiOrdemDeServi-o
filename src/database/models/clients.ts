import { DataTypes } from 'sequelize';
import { connection } from '../db';

const clientModel = connection.define('clients', {
  client_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cep: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  document: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

function createTableClients(client: any) {
  return client.sync({ force: false }).then(() => {
    console.log('*******Clients table successfully created*******');
  });
}

export { clientModel, createTableClients };
