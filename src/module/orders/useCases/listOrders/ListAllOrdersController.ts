import { Request, Response } from 'express';
import { ListAllOrdersUseCase } from './ListAllOrderUseCase';

class ListAllOrdersController {
  constructor(private listAllOrdersUseCase: ListAllOrdersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;

      const id: number = Number(user_id);

      const orders = await this.listAllOrdersUseCase.execute({ user_id: id });
      console.log('A orders são: ', orders);

      return response.status(201).json(orders);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    } finally {
      console.log('chegou aqui 3');
    }
  }
}

export { ListAllOrdersController };
