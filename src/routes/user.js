import express from "express";
const router = express.Router();
import UserController from "../module/controller/UserController";


router.post('/create', UserController.index);

export default router;