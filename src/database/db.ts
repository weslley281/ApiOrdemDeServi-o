import { Sequelize } from 'sequelize';

const connection = new Sequelize('orderofservice', 'root', 'Wesv@g28', {
  host: 'localhost',
  dialect: 'mysql',
});

function createConnectionDataBase(connection: Sequelize) {
  return connection.authenticate().then(() => {
    console.log('*******Connection made to the database!******* ');
  });
}

export { connection, createConnectionDataBase };
