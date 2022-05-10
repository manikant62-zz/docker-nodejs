import { Router } from "express";
import { helloController } from "../controllers/hello.controller";

const router = Router();

router.post("/hello", helloController);

export const helloRoute = router;
