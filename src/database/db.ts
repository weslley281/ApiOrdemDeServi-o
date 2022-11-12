const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'OrderOfService',
});

function establishConnection() {
  con.connect(function (err: any) {
    if (err) {
      console.log('Erro to establish connection...', err);
      return;
    }
    console.log('Connected successfull to db');
  });
}

function finishConnection(con: any) {
  con.end((err: Error) => {
    if (err) {
      console.log('Erro to finish connection...', err);
      return;
    }
    console.log('The connection was finish...');
  });
}

export { con, establishConnection, finishConnection };
