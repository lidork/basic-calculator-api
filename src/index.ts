import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Calculator API is running!');
});

app.get('/add', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: a + b });
});

app.get('/subtract', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: a - b });
});

app.get('/multiply', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: a * b });
});

app.get('/divide', (req: Request, res: Response) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (b === 0) {
      res.status(400).json({ error: 'Cannot divide by zero' });
      return;
    }
    
    res.json({ result: a / b });
});

app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});