import { Orders } from '../../models/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

interface IRequest {
  user_id: number;
  client_id: number;
  description: string;
  customerReport: string;
  diagnosis: string;
  warrantyAndNotes: string;
  serviceValue: number;
  sparePartsValue: number;
  status: number;
  finisheAt: string;
  finished: boolean;
}

class CreateOrderUseCase {
  constructor(private ordersRepository: IOrdersRepository) {}

  async execute({
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
  }: IRequest): Promise<Orders> {
    return await this.ordersRepository.create({
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
  }
}

export { CreateOrderUseCase };
