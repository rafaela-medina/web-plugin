import { Router } from "express";
import AuthController from "@adapters/controllers/AuthController";
import CollectController from "@adapters/controllers/CollectController";
import ListController from "@adapters/controllers/ListController";
import AuthMiddleware from "@adapters/middlewares/AuthMiddleware";
import RateLimitMiddleware from "@adapters/middlewares/RateLimitMiddleware";

const router = Router();

/**
 * @swagger
 * /api/v1/auth:
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
router.post("/auth", AuthController.authenticate);

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
router.post("/collect", AuthMiddleware, RateLimitMiddleware, CollectController.collect);

/**
 * @swagger
 * /api/v1/list:
 *   get:
 *     summary: Lista os últimos 20 eventos coletados
 *     tags: [Listagem]
 *     parameters:
 *       - name: domain
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de eventos coletados
 *       400:
 *         description: Erro na requisição
 */
router.get("/list", ListController.list);

export default router;
