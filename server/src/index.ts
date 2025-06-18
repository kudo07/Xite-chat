import express, { Application, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';

const app: Application = express();

const PORT = process.env.PORT || 7000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.get('/', (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

// start server
app.listen(PORT, () => console.log(`Server is running on PORT  ${PORT} ✔`));
