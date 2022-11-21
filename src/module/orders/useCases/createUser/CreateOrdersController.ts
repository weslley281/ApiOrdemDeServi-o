import { Request, Response } from 'express';
import { CreateOrderUseCase } from './CreateOrderUseCase';

class CreateOrdersController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        user_id,
        client_id,
        description,
        customerReport,
        diagnosis,
        warrantyAndNotes,
        serviceValue,
        sparePartsValue,
        finisheAt,
      } = request.body;

      const status: number = 1;
      const finished: boolean = false;

      const client = await this.createOrderUseCase.execute({
        user_id,
        client_id,
        description,
        customerReport,
        diagnosis,
        warrantyAndNotes,
        serviceValue,
        sparePartsValue,
        status,
        finisheAt,
        finished,
      });

      return response.status(201).json(client);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateOrdersController };
