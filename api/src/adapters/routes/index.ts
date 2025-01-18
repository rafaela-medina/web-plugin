import { Router } from "express";
import AuthController from "../controllers/AuthController";
import CollectController from "../controllers/CollectController";
import ListController from "../controllers/ListController";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import RateLimitMiddleware from "../middlewares/RateLimitMiddleware";

const router = Router();

router.post("/auth", (req, res) => AuthController.authenticate(req, res));

router.post("/collect", AuthMiddleware, RateLimitMiddleware, CollectController.collect);
router.get("/list", (req, res) => ListController.list(req, res));

export default router;