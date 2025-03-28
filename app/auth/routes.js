import { Router } from "express";
import { showLogin, authenticate, logout } from "./controller.js";

export const routes = new Router();

routes.get('/login', showLogin);
routes.post('/login', authenticate);
routes.get('/logout', logout);