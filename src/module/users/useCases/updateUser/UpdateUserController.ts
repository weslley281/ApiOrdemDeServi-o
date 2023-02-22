import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id, name, phone, email, admin, birthday, password } =
        request.body;

      const user = await this.updateUserUseCase.execute({
        user_id,
        name,
        phone,
        email,
        birthday,
        admin,
      });

      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateUserController };
