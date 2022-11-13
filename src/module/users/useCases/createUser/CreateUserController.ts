import { Response, Request } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, phone, email, admin, created_at } = request.body;

      const user = this.createUserUseCase.execute({
        name,
        phone,
        email,
        admin,
        created_at,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error: 'Erro ao cadastrar usuário' });
    }
  }
}

export { CreateUserController };
