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
 * /api/v1/collect:
 *   post:
 *     summary: Envia dados coletados pelo plugin
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Coleta
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
 *                 type: integer
 *     responses:
 *       201:
 *         description: Dados coletados com sucesso
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/collect", AuthMiddleware, CollectController.collect);

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