
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import helmet from "helmet";
import { usersRouter } from "./users/users.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const port: number = parseInt(process.env.PORT as string, 10);

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Node.js + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
