import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
// files
import { getUsers } from './controllers/users';

// Require the framework and instantiate it
const app: Application = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json()); // request application/type === json
app.use(express.urlencoded({ extended: false })); // form data object, value objectnya berasal dari input attribute name
// router.use(compression()); // Gzip compressing can greatly decrease the size of the response body

// Declare a route
app.get('/api', async (req: Request, res: Response) => {
  res.status(200);
  res.json({ success: true, msg: 'world' });
});
app.get('/api/users', getUsers);

// Run the server!
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`⚡ on http://localhost:${PORT}/api`));
