import express from "express";
import { createConnection } from "typeorm";
import { Student } from "./models/Student.model";
import { helloRoute } from "./routes/helloroutes";
import { studentRoute } from "./routes/student.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey there");
});

app.use("/hey", helloRoute);
app.use("/student", studentRoute);

const PORT = process.env.PORT || 1337;

async function start() {
  await createConnection({
    type: "sqlite",
    database: "./testdb.sqlite",
    entities: [Student],
    synchronize: true,
    // dropSchema: true, // TODO: not for production
    logging: true,
    logger: "advanced-console",
  });
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
}

start();
