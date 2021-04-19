import { Router } from "express";
import { getStudents, getStudentByID } from "../controller/students.controller";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       required:
 *         - id
 *         - nome
 *         - alunos
 *       properties:
 *         id:
 *           type: string
 *           description: The school id
 *           example: sch01
 *         nome:
 *           type: string
 *           description: The school name
 *           example: Escola REST
 *         alunos:
 *           type: array
 *           items:
 *                 $ref: '#/components/schemas/Student'
 *           description: The 4 school's students
 *     Student:
 *       type: object
 *       required:
 *         - nome
 *         - matricula
 *         - datanascimento
 *         - usuario
 *         - email
 *         - cpf
 *         - sexo
 *         - telefone
 *         - celular
 *         - cep
 *         - endereco
 *       properties:
 *         nome:
 *           type: string
 *           description: The student name
 *           example: Maria Silva
 *         matricula:
 *           type: string
 *           description: The student id
 *           example: 7ae19129-ef3f-41aa-872b-e764ecgftff7b
 *         datanascimento:
 *           type: string
 *           description: The student birth date
 *           example: 2010-05-10
 *         usuario:
 *           type: string
 *           description: The student username
 *           example: maria-silva
 *         email:
 *           type: string
 *           description: The student email
 *           example: maria-silva@bol.com.br
 *         cpf:
 *           type: string
 *           description: The student cpf
 *           example: 066.456.876-98
 *         sexo:
 *           type: string
 *           description: The student gender
 *           example: M
 *         telefone:
 *           type: string
 *           description: The student telephone number
 *           example: (11) 3564-7658
 *         celular:
 *           type: string
 *           description: The student cell number
 *           example: (11) 99657-9875
 *         cep:
 *           type: string
 *           description: The student zip code
 *           example: 56789-325
 *         endereco:
 *           type: string
 *           description: The student address
 *           example: Marginal Santos 76534
 */

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Consult Isaac students
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Returns the list of students tracked by School (4 students per school)
 *     tags: [Students]
 *     responses:
 *       200:
 *        description: The list of students tracked by School
 *        content:
 *          application/json:
 *               schema:
 *                  type: object
 *                  required:
 *                      - requestId
 *                      - data
 *                  properties:
 *                      requestId:
 *                          type: string
 *                          description: The request ID
 *                          example: 30114fe0-93f4-463f-b551-19f89a797419
 *                      data:
 *                          type: array
 *                          description: 4 students from this school
 *                          items:
 *                              $ref: '#/components/schemas/School'
 */

router.get("/students", getStudents);

/**
 * @swagger
 * /api/school/{schoolId}/student/{studentId}:
 *   get:
 *     summary: Returns a student from a specific school tracked by their enrollment number
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: schoolId
 *         schema:
 *           type: string
 *         required: true
 *         description: The school ID (REST School ID is sch01 | GraphQL School ID is sch02)
 *       - in: path
 *         name: studentId
 *         schema:
 *           type: string
 *         required: true
 *         description: The student ID (uuid/enrollment)
 *     responses:
 *       200:
 *        description: The student of a specific school
 *        content:
 *          application/json:
 *               schema:
 *                  type: object
 *                  required:
 *                      - requestId
 *                      - data
 *                  properties:
 *                      requestId:
 *                          type: string
 *                          description: The request ID
 *                          example: 50134fe0-93f4-463f-b551-19f89a785407
 *                      data:
 *                          $ref: '#/components/schemas/Student'
 *       404:
 *          description: Student not found
 *
 */

router.get("/school/:schoolId/student/:studentId", getStudentByID);

export default router;
