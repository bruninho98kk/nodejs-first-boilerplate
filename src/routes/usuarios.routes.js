import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (req,res) => {
    return res.status(200).json({
        message:
        usuarios.lenght == 0
        ? "Nenhum usuário cadastrado"
        : `Total de usuários: ${usuarios.lenght}`,
        usuarios,
    });
});

export default usuariosRoutes;
