import { Router } from "express";
import AuthController from "../controllers/AuthController";
import CollectController from "../controllers/CollectController";
import ListController from "../controllers/ListController";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = Router();

router.post("/auth", (req, res) => AuthController.authenticate(req, res));

router.post("/collect", AuthMiddleware, (req, res) => CollectController.collect(req, res));
router.get("/list", (req, res) => ListController.list(req, res));

export default router;