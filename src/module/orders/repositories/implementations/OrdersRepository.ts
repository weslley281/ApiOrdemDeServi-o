import { orderModel } from '../../../../database/models/orders';
import { IOrdersDTO } from '../../DTO/IOrdersDTO';
import { Orders } from '../../models/Order';
import { IOrdersRepository } from '../IOrdersRepository';

class OrdersRepository implements IOrdersRepository {
  private static INSTANCE: OrdersRepository;

  public static getInstance() {
    if (!OrdersRepository.INSTANCE) {
      OrdersRepository.INSTANCE = new OrdersRepository();
    }

    return OrdersRepository.INSTANCE;
  }

  async create({
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
  }: IOrdersDTO): Promise<Orders> {
    const order: any = await orderModel.create({
      user_id: user_id,
      client_id: client_id,
      description: description,
      customerReport: customerReport,
      diagnosis: diagnosis,
      warrantyAndNotes: warrantyAndNotes,
      serviceValue: serviceValue,
      sparePartsValue: sparePartsValue,
      status: status,
      finisheAt: finisheAt,
      finished: finished,
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
