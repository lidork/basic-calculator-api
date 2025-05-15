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
    const params  = parseNumber({a,b});
    res.json(basicfunc.divide(params));
  } catch (err : unknown) {
    const message : string = err instanceof Error ? err.message : String(err);
    res.status(400).json({error : message});
  }
});

router.get('/pow', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  const params  = parseNumber({a,b});
  res.json(basicfunc.pow(params));
})

router.get('/root', (req: Request, res: Response) => {
  const a = String(req.query.a);
  const b = String(req.query.b);
  const params  = parseNumber({a,b});
  res.json(basicfunc.root(params));
})

router.get('/sin', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  res.json(basicfunc.sin(a));
})

router.get('/cos', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  res.json(basicfunc.cos(a));
})

router.get('/tan', (req: Request, res: Response) => {
  const a = Number(req.query.a);
  res.json(basicfunc.tan(a));
})

export default router; //export for outside access