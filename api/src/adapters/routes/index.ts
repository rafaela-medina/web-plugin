import { Router } from "express";
import AuthController from "../controllers/AuthController";
import CollectController from "../controllers/CollectController";
import ListController from "../controllers/ListController";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = Router();

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Gera um token JWT para um domínio autorizado
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               domain:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token gerado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post("/auth", (req, res) => AuthController.authenticate(req, res));

/**
 * @swagger
 * /collect:
 *   post:
 *     summary: Coleta dados do usuário e salva no MongoDB
 *     tags: [Coleta de Dados]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               device:
 *                 type: string
 *               os:
 *                 type: string
 *               themeSwitchCount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Dados coletados com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post("/collect", AuthMiddleware, (req, res) => CollectController.collect(req, res));

/**
 * @swagger
 * /list:
 *   get:
 *     summary: Lista os últimos 20 eventos coletados
 *     tags: [Listagem]
 *     parameters:
 *       - name: domain
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de eventos coletados
 *       400:
 *         description: Erro na requisição
 */
router.get("/list", (req, res) => ListController.list(req, res));

export default router;