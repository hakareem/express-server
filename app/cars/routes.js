import { Router } from "express"
import { listCars, carPage } from "./controller.js";
export const routes = new Router();


// /cars

routes.get('/', listCars)

routes.get('/:id', carPage)