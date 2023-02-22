import { IUserRepository } from '../../repositories/IUsersPepository';

interface IRequest {
  user_id: number;
  name: string;
  phone: string;
  email: string;
  birthday: string;
  admin: boolean;
}
class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ user_id, name, phone, email, birthday, admin }: IRequest) {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      return await this.userRepository.update({
        user_id,
        name,
        phone,
        email,
        birthday,
        admin,
      });
    } else {
      throw new Error('User not exists');
    }
  }
}

export { UpdateUserUseCase };
