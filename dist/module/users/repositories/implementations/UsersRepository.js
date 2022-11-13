"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const db_1 = require("../../../../database/db");
const User_1 = require("../../model/User");
class UsersRepository {
    static getInstance() {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    }
    create({ name, phone, email, admin, created_at, encryptedpassword, }) {
        const user = new User_1.User();
        Object.assign(user, {
            name,
            phone,
            email,
            admin,
            encryptedpassword,
            created_at,
        });
        const insert = `INSERT INTO users (name, phone, email, admin, password, created_at) VALUES ("${name}", "${phone}", "${email}", ${admin}, "${encryptedpassword}", "${created_at}")`;
        console.log('O sql gerado é ' + insert);
        db_1.con.query(insert, function (err, rows) {
            if (err)
                throw err;
            console.log('Usuário cadastrado com sucesso');
        });
        return user;
    }
    findById(user_id) {
        let user;
        const select = `Select * FROM users WHERE user_id = "${user_id}"`;
        db_1.con.query(select, (err, rows) => {
            if (err) {
                console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
            }
            user = rows;
            console.log('Usuários buscado com sucesso com sucesso');
        });
        return user;
    }
    findByEmail(email) {
        let user;
        const select = `Select * FROM users WHERE user_id = "${email}"`;
        db_1.con.query(select, (err, rows) => {
            if (err) {
                console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
            }
            user = rows;
            console.log('Usuários buscado com sucesso com sucesso');
        });
        return user;
    }
    turnAdmin(user) {
        let receivedUser;
        const update = `UPDATE users SET admin = ${user.admin} WHERE user_id = "${user.user_id}"`;
        db_1.con.query(update, (err, rows) => {
            if (err) {
                console.log(`Erro ao tornar usuário em administrado no banco\nDetalhes: ${err}`);
                receivedUser = rows;
                console.log('Permissões de usuário alterado com sucesso com sucesso');
            }
        });
        return receivedUser;
    }
    list() {
        let users;
        const select = `Select * FROM users`;
        db_1.con.query(select, (err, rows) => {
            if (err) {
                console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
            }
            users = rows;
            console.log('Usuários buscado com sucesso com sucesso');
        });
        return users;
    }
}
exports.UsersRepository = UsersRepository;
