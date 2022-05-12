import * as express from 'express';
import { helloRoute } from "./app/routes/helloroutes";

console.log('hey ya');


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey there");
});

app.use('/hey', helloRoute)

const PORT = process.env.PORT || 1337

async function start() {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
}

start();
