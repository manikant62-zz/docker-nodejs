import { Router } from "express";
import { createStudent } from "../controllers/student.controller";

const route = Router();

route.post("/", async (req, res) => {
  try {
    const student = await createStudent(req.body);
    res.status(201).json({ student });
  } catch (e: any) {
    return res.status(422).json({
      errors: { body: "Could not create student " + e.message },
    });
  }
});

export const studentRoute = route;
