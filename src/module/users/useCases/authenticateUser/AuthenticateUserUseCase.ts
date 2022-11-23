import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUserRepository } from '../../repositories/IUsersPepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    user_id: number;
    name: string;
    email: string;
  };
  token: string;
}

class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error('Email or password incorrect!');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Email or password incorrect!');

    const token = sign({}, 'orderofservice', {
      subject: user.user_id.toString(),
      expiresIn: '1h',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
