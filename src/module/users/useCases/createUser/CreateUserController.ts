import { Response, Request } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, phone, email, admin, birthday, password } = request.body;

      const user = await this.createUserUseCase.execute({
        name,
        phone,
        email,
        birthday,
        admin,
        password,
      });

      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
