import express from "express";
import UsuarioController from "./controller/UsuarioController.js";

const UsuarioRoute = express.Router();
const usuarioController = new UsuarioController();

UsuarioRoute.get('/usuarios', usuarioController.findAll)
UsuarioRoute.get('/usuarios/:id', usuarioController.findByPK)
UsuarioRoute.post('/usuarios', usuarioController.create)
UsuarioRoute.put('/usuarios/:id', usuarioController.update)
UsuarioRoute.delete('/usuarios/:id', usuarioController.delete)

export default UsuarioRoute;