import { Router } from "express";
import { StudentsController } from "../controllers";
const router = Router();

const studentsController = new StudentsController();

router.get("/", studentsController.getStudents);
router.get("/:matricula", studentsController.getStudent);

export default router;