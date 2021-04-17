import { Router } from "express";
import { getStudents, getStudentByID } from "../controller/students.controller";

const router = Router();

router.get("/students", getStudents);
router.get("/school/:schoolId/student/:studentId", getStudentByID);

export default router;