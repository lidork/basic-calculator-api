import express, { Request, Response } from 'express';
import { CalcParams, NumericPair, ApiResponse }  from '../modules/types';
import basicFuncService from '../services/basicfuncService';

const router = express.Router(); // for routing here
const basicfunc = new basicFuncService();



function parseNumber(params : CalcParams) : NumericPair{
  const a = Number(params.a);
  const b = Number(params.b);
  if(Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Invalid Number');
  }
  return {a,b};
}

router.get('/', (_req: Request, res: Response) => {
  res.send('Calculator API is running!');
});

router.get('/add', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  const params  = parseNumber({a,b});
  res.json(basicfunc.add(params));
});

router.get('/subtract', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  const params  = parseNumber({a,b});
  res.json(basicfunc.subtract(params));
});

router.get('/multiply', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  const params  = parseNumber({a,b});
  res.json(basicfunc.multiply(params));
});

router.get('/divide', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  try {
      console.log('something');
     const params  = parseNumber({a,b});
     res.json(basicfunc.divide(params));
  } catch (error) {
    res.json({error: 'not a number'});
  }
});



export default router; //export for outside access