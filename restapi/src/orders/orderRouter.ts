import {Router} from "express";
import OrderController from "./orderController";

const OrderRouter = Router()

OrderRouter.get('/', OrderController.getAll);
OrderRouter.get('/:email', OrderController.get);
OrderRouter.post('/', OrderController.create);

export default OrderRouter;