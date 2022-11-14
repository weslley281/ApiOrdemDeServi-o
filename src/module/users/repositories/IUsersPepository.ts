import { ICreateUserDTO } from '../DTO/IUserDTO';
import { User } from '../model/User';

interface IUserRepository {
  create({
    name,
    phone,
    email,
    admin,
    encryptedpassword,
    created_at,
  }: ICreateUserDTO): User;
  findById(user_id: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
  turnAdmin(user: User): User;
  list(): User[];
}

export { IUserRepository, ICreateUserDTO };
