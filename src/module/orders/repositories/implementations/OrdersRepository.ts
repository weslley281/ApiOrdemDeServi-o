import { orderModel } from '../../../../database/models/orders';
import { IOrdersDTO } from '../../DTO/IOrdersDTO';
import { Orders } from '../../models/Order';
import { IOrdersRepository } from '../IOrdersRepository';

class OrdersRepository implements IOrdersRepository {
  async create({
    user_id,
    description,
    customerReport,
    diagnosis,
    warrantyAndNotes,
    serviceValue,
    sparePartsValue,
    status,
  }: IOrdersDTO): Promise<Orders> {
    const [order, created]: any = await orderModel.create({
      user_id,
      description,
      customerReport,
      diagnosis,
      warrantyAndNotes,
      serviceValue,
      sparePartsValue,
      status,
    });

    return order;
  }

  async findByID(order_id: number): Promise<Orders> {
    const order: any = await orderModel.findOne({
      where: { order_id: order_id },
    });

    return order;
  }

  async findByIDUser(user_id: number): Promise<Orders> {
    const order: any = await orderModel.findOne({
      where: { user_id: user_id },
    });

    return order;
  }

  async listOrders(): Promise<Orders[]> {
    const orders: any = await orderModel.findAll();

    return orders;
  }
}

export { OrdersRepository };
