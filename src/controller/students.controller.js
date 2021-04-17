import { getSchoolRestData } from "../services/case.school.rest.service";
import { v4 as uuidv4 } from "uuid";
import { getSchoolGraphQLData } from "../services/case.school.graphql.service";
import { getToken } from "../middlewares/getToken";

export const getStudents = async (_, res) => {
  const token = await getToken();

  try {
    const school01Students = await getSchoolRestData.getStudents(token);
    const school02Students = await getSchoolGraphQLData.getStudents();

    const sch01 = {
      id: "sch01",
      nome: "Escola REST",
      alunos: school01Students,
    };

    const sch02 = {
      id: "sch02",
      nome: "Escola GraphQL",
      alunos: school02Students,
    };

    res.status(200).json({
      requestId: uuidv4(),
      data: [sch01, sch02]
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message });
  }
};

export const getStudentByID = async (req, res) => {
  const { schoolId, studentId } = req.params;
  const token = await getToken();
  let student;

  try {
    if (schoolId === "sch01") {
      student = await getSchoolRestData.getStudentByID(token, studentId);
    } else {
      student = await getSchoolGraphQLData.getStudentByID(studentId);
    }

   res.status(200).json({
      requestId: uuidv4(),
      data: student,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message });
  }
};
