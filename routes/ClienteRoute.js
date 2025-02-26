import express from "express";
import ClienteController from "../controller/ClienteController.js";

const ClienteRoute = express.Router();
const clienteController = new ClienteController();

ClienteRoute.get('/clientes', clienteController.findAll)
ClienteRoute.get('/clientes/:id', clienteController.findByPK)
ClienteRoute.post('/clientes', clienteController.create)
ClienteRoute.put('/clientes/:id', clienteController.update)
ClienteRoute.delete('/clientes/:id', clienteController.delete)

export default ClienteRoute;