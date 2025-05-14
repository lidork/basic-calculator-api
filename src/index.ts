import express, { Request, Response } from 'express';
import { CalcParams, NumericPair, ApiResponse }  from './types';


const app = express();
const port = 3000;

function parseNumber(params : CalcParams) : NumericPair{
  const a = Number(params.a);
  const b = Number(params.b);
  if(Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Invalid Number');
  }
  return {a,b};
}

function add(params : NumericPair) : ApiResponse<number> {
  return {result: params.a + params.b }; 
}

function subtract(params : NumericPair) : ApiResponse<number> {
  return {result: params.a - params.b};
}

function multiply(params : NumericPair) : ApiResponse<number> {
  return {result: params.a * params.b};
}

function divide(params : NumericPair) : ApiResponse<number> {
  if ( params.b == 0 )
    return {error : 'Cannot divide by zero'};
  return {result: params.a / params.b};
}

app.get('/', (_req: Request, res: Response) => {
  res.send('Calculator API is running!');
});

app.get('/add', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  const params  = parseNumber({a,b});
  res.json(add(params));
});

app.get('/subtract', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  const params  = parseNumber({a,b});
  res.json(subtract(params));
});

app.get('/multiply', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  const params  = parseNumber({a,b});
  res.json(multiply(params));
});

app.get('/divide', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  try {
     const params  = parseNumber({a,b});
     res.json(divide(params));
  } catch (error) {
    res.json({error: 'not a number'});
  }
});



app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});