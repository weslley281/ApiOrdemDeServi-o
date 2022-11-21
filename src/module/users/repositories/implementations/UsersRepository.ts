import { userModel } from '../../../../database/models/users';
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

  async create({
    name,
    phone,
    email,
    birthday,
    admin,
    encryptedpassword,
  }: ICreateUserDTO): Promise<User> {
    const [user, created]: any = await userModel.findOrCreate({
      where: { email: !email },
      defaults: {
        name,
        phone,
        email,
        birthday,
        admin,
        password: encryptedpassword,
      },
    });

    return user;
  }

  async update({
    user_id,
    name,
    phone,
    email,
    birthday,
    admin,
    encryptedpassword,
  }: ICreateUserDTO): Promise<Object> {
    const user: any = await userModel.update(
      { name, phone, email, birthday, admin, password: encryptedpassword },
      { where: { user_id: user_id } }
    );

    if (user) {
      return {
        user_id,
        name,
        phone,
        email,
        birthday,
        admin,
        encryptedpassword,
      };
    } else {
      return { message: 'Error' };
    }
  }

  async findById(user_id: number): Promise<User> {
    const user: any = await userModel.findOne({ where: { user_id: user_id } });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user: any = await userModel.findOne({ where: { email: email } });

    return user;
  }

  async turnAdmin(user: User): Promise<User> {
    const userChanged: any = await userModel.update(
      { admin: !user.admin },
      { where: { user_id: user.user_id } }
    );
    return userChanged;
  }

  async findAllUser(): Promise<User[]> {
    const user: any = await userModel.findAll();

    return user;
  }
}

export { UsersRepository };
