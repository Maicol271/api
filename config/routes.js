import { Router } from "express";
import infoController from "../controller/infoController";


const routes= new Router()
//OBTENER
routes.get('/info' ,infoController.index)
//ENVIAR
routes.post('/info' ,infoController.store) 
//CONSULTAR
routes.get('/info' ,infoController.detail) 

export default Router