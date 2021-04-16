import { getSchool01Data } from "../services/case.school01.service";
import { getSchool02Data } from "../services/case.school02.service";
import { getToken } from "../middlewares/getToken";

export const getStudents = async (req, res) => {
  const token = await getToken();

  try {
    const school01Students = await getSchool01Data.getStudents(token);
    const school02Students = await getSchool02Data.getStudents();

    const { users: students } = school02Students;

    const sch01 = {
      id: "sch01",
      nome: "School 01",
      alunos: school01Students,
    };

    const sch02 = {
      id: "sch02",
      nome: "School 02",
      alunos: [...students],
    };

    console.log({
      sch01,
      sch02,
    });
    res.status(200).json({
      sch01,
      sch02,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStudentByID = async (req, res) => {
  const { schoolId, studentId } = req.params;
  const token = await getToken();
  let student;

  try {
    if (schoolId == "sch01") {
      student = await getSchool01Data.getStudentByID(token, studentId);
      res.status(200).json(student);
    } else {
      student = await getSchool02Data.getStudentByID(studentId);
      res.status(200).json(student);
    }
  } catch (error) {
    console.log(error);
  }
};
