import { User } from '../../model/User';
import { IUserRepository } from '../../repositories/IUsersPepository';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  admin: boolean;
  encryptedpassword: string;
  created_at: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  execute({
    name,
    phone,
    email,
    admin,
    encryptedpassword,
    created_at,
  }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);
    console.log('verdadeiro ? ' + userAlreadyExists);

    if (userAlreadyExists) throw new Error('User already exists');

    return this.usersRepository.create({
      name,
      phone,
      email,
      admin,
      encryptedpassword,
      created_at,
    });
  }
}

export { CreateUserUseCase };
