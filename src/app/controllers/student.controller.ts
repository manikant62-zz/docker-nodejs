import { getRepository } from "typeorm";
import { Student } from "../models/Student.model";

interface StudentData {
  name: string;
  standard: string;
  rollNo: string;
}

export async function createStudent(data: StudentData): Promise<Student> {
  // Data validation
  if (!data.name) throw new Error("Name is Compulsory");
  if (!data.standard) throw new Error("Standard is Compulsory");
  if (!data.rollNo) throw new Error("rollNo is Compulsory");

  const articleRepo = getRepository(Student);

  try {
    const student = await articleRepo.save(
      new Student(data.name, data.standard, data.rollNo)
    );

    return student;
  } catch (e) {
    throw e;
  }
}
