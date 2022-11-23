import { Request, Response } from 'express';
import { ListAllClientsUseCase } from './ListAllClientsUseCase';

class ListAllClientsController {
  constructor(private listAllClientsUseCase: ListAllClientsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;
      console.log(user_id);

      const id: number = Number(user_id);

      const clients = this.listAllClientsUseCase.execute({ user_id: id });

      return response.status(200).json(clients);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllClientsController };
