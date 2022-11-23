import { User } from '../../model/User';
import { IUserRepository } from '../../repositories/IUsersPepository';
import { hash } from 'bcrypt';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  admin: boolean;
  password: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    name,
    phone,
    email,
    birthday,
    admin,
    password,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(password, 8);

    return await this.usersRepository.create({
      name,
      phone,
      email,
      birthday,
      admin,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
