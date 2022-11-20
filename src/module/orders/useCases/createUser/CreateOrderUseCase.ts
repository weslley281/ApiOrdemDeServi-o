import { IUserRepository } from '../../../users/repositories/IUsersPepository';
import { Orders } from '../../models/Order';

interface IRequest {
  user_id: number;
  description: string;
  customerReport: string;
  diagnosis: string;
  warrantyAndNotes: string;
  serviceValue: number;
  sparePartsValue: number;
  status: number;
}

class CreateOrderUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    user_id,
    description,
    customerReport,
    diagnosis,
    warrantyAndNotes,
    serviceValue,
    sparePartsValue,
    status,
  }: IRequest): Promise<Orders> {}
}
