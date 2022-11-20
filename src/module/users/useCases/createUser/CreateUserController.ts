import { Response, Request } from 'express';
import { encryptPassword } from '../encryptPassword/encryptPassword';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, phone, email, admin, birthday, password } = request.body;

      const encryptedpassword = encryptPassword(password);

      const user = await this.createUserUseCase.execute({
        name,
        phone,
        email,
        birthday,
        admin,
        encryptedpassword,
      });

      return response.status(201).json(user);
    } catch (error: any) {
      console.log(`Error registering user, more details: ${error}`);
      return response.status(400).json({ error: error.error });
    }
  }
}

export { CreateUserController };
