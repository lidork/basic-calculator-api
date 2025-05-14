import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

function add(a: number, b: number) : number {
  return a + b;
}

function subtract(a: number, b: number) : number {
  return a - b;
}

function multiply (a: number, b: number): number {
  return a * b;
}

function divide (a: number, b: number) : number | string {
  if ( b == 0 )
    return 'Cannot divide by zero'
  return a/b;
}

app.get('/', (_req: Request, res: Response) => {
  res.send('Calculator API is running!');
});

app.get('/add', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: add(a,b) });
});

app.get('/subtract', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: subtract(a,b) });
});

app.get('/multiply', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: multiply(a,b) });
});

app.get('/divide', (req: Request, res: Response) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    let c = divide(a,b);
    if (typeof c != 'number')
      res.status(400).json({error: c});
    else
      res.json({ result: a / b });
});

app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});