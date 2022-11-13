import { con } from '../../../../database/db';
import { User } from '../../model/User';
import { ICreateUserDTO, IUserRepository } from '../IUsersPepository';

class UsersRepository implements IUserRepository {
  private static INSTANCE: UsersRepository;

  public static getInstance() {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({
    name,
    phone,
    email,
    admin,
    created_at,
    encryptedpassword,
  }: ICreateUserDTO): User {
    const user = new User();

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

    con.query(insert, function (err: any, result: any) {
      if (err) throw err;
      console.log('Usuário cadastrado com sucesso');
    });

    return user;
  }

  findById(user_id: number): User {
    let user: any;
    const select = `Select * FROM users WHERE user_id = "${user_id}"`;

    con.query(select, (err: any, result: any) => {
      if (err) {
        console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
      }

      user = result;

      console.log('Usuários buscado com sucesso com sucesso');
    });

    return user;
  }

  findByEmail(email: string): User {
    let user: any;
    const select = `Select * FROM users WHERE email = "${email}"`;

    con.query(select, (err: any, result: any) => {
      if (err) {
        console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
      }

      user = result;

      console.log('Usuários buscado com sucesso com sucesso');
    });

    return user;
  }

  turnAdmin(user: User): User {
    let receivedUser: any;
    const update = `UPDATE users SET admin = ${user.admin} WHERE user_id = "${user.user_id}"`;

    con.query(update, (err: any, result: any) => {
      if (err) {
        console.log(
          `Erro ao tornar usuário em administrado no banco\nDetalhes: ${err}`
        );

        receivedUser = result;

        console.log('Permissões de usuário alterado com sucesso com sucesso');
      }
    });

    return receivedUser;
  }

  list(): User[] {
    let users: any;
    const select = `Select * FROM users`;

    con.query(select, (err: any, result: any) => {
      if (err) {
        console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
      }

      users = result;

      console.log('Usuários buscado com sucesso com sucesso');
    });

    return users;
  }
}

export { UsersRepository };
