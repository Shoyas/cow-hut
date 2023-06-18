import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload);
  await (await result.populate('cow')).populate('buyer');

  return result;
};

const getOrder = async (): Promise<IOrder[]> => {
  const result = await Order.find().populate('buyer');
  return result;
};

export const OrderService = {
  createOrder,
  getOrder,
};
