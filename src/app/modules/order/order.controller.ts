import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IOrder } from './order.interface';
import { OrderService } from './order.service';

const createOrder: RequestHandler = catchAsync(async (req, res) => {
  const { ...orderData } = req.body;
  const result = await OrderService.createOrder(orderData);

  sendResponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order is created successfully',
    data: result,
  });
});

const getOrder: RequestHandler = catchAsync(async (req, res) => {
  const result = await OrderService.getOrder();

  sendResponse<IOrder[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order is retrieved successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getOrder,
};
