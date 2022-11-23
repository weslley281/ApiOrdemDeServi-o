import { ICreateUserDTO } from '../DTO/IUserDTO';
import { User } from '../model/User';

interface IUserRepository {
  create({
    name,
    phone,
    email,
    birthday,
    admin,
    password,
  }: ICreateUserDTO): Promise<User>;
  update({
    name,
    phone,
    email,
    birthday,
    admin,
    password,
  }: ICreateUserDTO): Promise<Object>;
  findById(user_id: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
  turnAdmin(user: User): Promise<User>;
  findAllUser(): Promise<User[]>;
}

export { IUserRepository, ICreateUserDTO };
