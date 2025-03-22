import { Router } from "express"
import { listCars, carPage, createCar, storeCar, editCar, updateCar, deleteCar } from "./controller.js";
import { checkAuth } from "../auth/middleware.js";
export const routes = new Router();


// /cars
routes.use(checkAuth);

routes.get('/', listCars);
routes.post('/', checkAuth, storeCar);
routes.get(`/create`, checkAuth, createCar);
routes.get('/:id/edit', checkAuth, editCar);
routes.get('/:id/delete', checkAuth, deleteCar);
routes.get('/:id', carPage);
routes.post('/:id', checkAuth, updateCar);