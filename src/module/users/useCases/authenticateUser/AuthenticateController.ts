import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { password, email } = request.body;

      const token = await this.authenticateUserUseCase.execute({
        password,
        email,
      });

      return response.json(token);
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}

export { AuthenticateUserController };
