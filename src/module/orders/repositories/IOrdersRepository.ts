import { IOrdersDTO } from '../DTO/IOrdersDTO';
import { Orders } from '../models/Order';

interface IOrdersRepository {
  create({
    user_id,
    description,
    customerReport,
    diagnosis,
    warrantyAndNotes,
    serviceValue,
    sparePartsValue,
    status,
    finisheAt,
    finished,
  }: IOrdersDTO): Promise<Orders>;
  findByID(order_id: number): Promise<Orders>;
  findByIDUser(user_id: number): Promise<Orders>;
  listOrders(): Promise<Orders[]>;
}

export { IOrdersRepository };
