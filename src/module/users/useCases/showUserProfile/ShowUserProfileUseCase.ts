import { User } from '../../model/User';
import { IUserRepository } from '../../repositories/IUsersPepository';

interface IRequest {
  user_id: number;
}

class ShowUserProfileUseCase {
  constructor(private usersrepository: IUserRepository) {}

  execute({ user_id }: IRequest): User | undefined {
    const user = this.usersrepository.findById(user_id);

    if (!user) throw new Error('User not exists');

    return this.usersrepository.findById(user_id);
  }
}

export { ShowUserProfileUseCase };
