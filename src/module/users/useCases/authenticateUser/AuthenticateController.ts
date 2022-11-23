import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const token = await this.authenticateUserUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };
