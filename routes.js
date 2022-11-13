import express from "express";
import clients from "./src/controllers/clients.js";
 
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ name: "Tester Namer"});
})

routes.get('/clients', clients.findAll);

export { routes as default };