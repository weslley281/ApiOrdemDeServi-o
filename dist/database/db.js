"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finishConnection = exports.establishConnection = exports.con = void 0;
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'OrderOfService',
});
exports.con = con;
function establishConnection() {
    con.connect(function (err) {
        if (err) {
            console.log('Erro to establish connection...', err);
            return;
        }
        console.log('Connected successfull to db');
    });
}
exports.establishConnection = establishConnection;
function finishConnection(con) {
    con.end((err) => {
        if (err) {
            console.log('Erro to finish connection...', err);
            return;
        }
        console.log('The connection was finish...');
    });
}
exports.finishConnection = finishConnection;
