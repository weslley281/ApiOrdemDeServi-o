import { User } from '../../model/User';
import { IUserRepository } from '../../repositories/IUsersPepository';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  admin: boolean;
  encryptedpassword: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    name,
    phone,
    email,
    birthday,
    admin,
    encryptedpassword,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists');

    return await this.usersRepository.create({
      name,
      phone,
      email,
      birthday,
      admin,
      encryptedpassword,
    });
  }
}

export { CreateUserUseCase };
