import { Request, Response } from 'express';
import { CreateClientsUseCase } from './CreateClientsUseCase';

class CreateClientsController {
  constructor(private createClientsUseCase: CreateClientsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        phone,
        email,
        birthday,
        country,
        state,
        city,
        district,
        address,
        cep,
        document,
      } = request.body;

      const client = await this.createClientsUseCase.execute({
        name,
        phone,
        email,
        birthday,
        country,
        state,
        city,
        district,
        address,
        cep,
        document,
      });

      return response.status(201).json(client);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateClientsController };
