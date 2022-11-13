import {
  con,
  establishConnection,
  finishConnection,
} from '../../../../database/db';
import { IQueryDTO } from '../../DTO/IQueryDTO';
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

  create({ name, phone, email, admin, created_at }: ICreateUserDTO): User {
    const user = new User();
    establishConnection();

    Object.assign(user, {
      name,
      phone,
      email,
      admin,
      created_at,
    });

    const insert = `INSERT INTO users (name, phone, email, admin, created_at, updated_at) VALUES ("${name}", "${phone}", "${email}", "${admin}", "${created_at}")`;

    console.log(insert);

    con.query(insert, ({ err, result }: IQueryDTO) => {
      if (err) {
        console.log(`Erro ao inserir usuário no banco\nDetalhes: ${err}`);
      }
      console.log('Usuário cadastrado com sucesso');
    });

    finishConnection(con);

    return user;
  }

  findById(user_id: number): User {
    let user: any;
    const select = `Select * FROM users WHERE user_id = "${user_id}"`;

    establishConnection();

    con.query(select, ({ err, result }: IQueryDTO) => {
      if (err) {
        console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
      }

      user = result;

      console.log('Usuários buscado com sucesso com sucesso');
    });

    finishConnection(con);

    return user;
  }

  findByEmail(email: string): User {
    let user: any;
    const select = `Select * FROM users WHERE email = "${email}"`;

    establishConnection();

    con.query(select, ({ err, result }: IQueryDTO) => {
      if (err) {
        console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
      }

      user = result;

      console.log('Usuários buscado com sucesso com sucesso');
    });

    finishConnection(con);

    return user;
  }

  turnAdmin(user: User): User {
    let receivedUser: any;
    const update = `UPDATE users SET admin = ${user.admin} WHERE user_id = "${user.user_id}"`;

    establishConnection();

    con.query(update, ({ err, result }: IQueryDTO) => {
      if (err) {
        console.log(
          `Erro ao tornar usuário em administrado no banco\nDetalhes: ${err}`
        );

        receivedUser = result;

        console.log('Permissões de usuário alterado com sucesso com sucesso');
      }
    });

    finishConnection(con);

    return receivedUser;
  }

  list(): User[] {
    let users: any;
    const select = `Select * FROM users`;

    establishConnection();

    con.query(select, ({ err, result }: IQueryDTO) => {
      if (err) {
        console.log(`Erro ao buscar usuários no banco\nDetalhes: ${err}`);
      }

      users = result;

      console.log('Usuários buscado com sucesso com sucesso');
    });

    finishConnection(con);

    return users;
  }
}

export { UsersRepository };
