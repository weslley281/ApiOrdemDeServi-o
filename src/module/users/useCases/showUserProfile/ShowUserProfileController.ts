import { Request, Response } from 'express';
import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;
      const id = Number(user_id);

      const user = await this.showUserProfileUseCase.execute({ user_id: id });

      return response.status(200).json(user);
    } catch (error: any) {
      console.log(`Erro ao mostrar dados do usuário, detalhes: ${error}`);

      return response.status(404).json({ error: error.error });
    }
  }
}

export { ShowUserProfileController };
