import { User } from '../../model/User';
import { IUserRepository } from '../../repositories/IUsersPepository';

interface IRequest {
  user_id: number;
}

class ShowUserProfileUseCase {
  constructor(private usersrepository: IUserRepository) {}

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersrepository.findById(user_id);

    if (!user) throw new Error('User not exists');

    return this.usersrepository.findById(user_id);
  }
}

export { ShowUserProfileUseCase };
