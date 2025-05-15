import { CalcParams, NumericPair, ApiResponse }  from '../modules/types';


export default class basicFuncService {

    add(params : NumericPair) : ApiResponse<number> {
      return {result: params.a + params.b }; 
    }
    
    subtract(params : NumericPair) : ApiResponse<number> {
      return {result: params.a - params.b};
    }
    
    multiply(params : NumericPair) : ApiResponse<number> {
      return {result: params.a * params.b};
    }
    
    divide(params : NumericPair) : ApiResponse<number> {
      if ( params.b == 0 )
        return {error : 'Cannot divide by zero'};
      //rounding to 4 decimal points
      return {result: Math.round((params.a / params.b) * 10000) / 10000};
    }

    pow(params : NumericPair) : ApiResponse<number> {
        return {result: Math.pow(params.a, params.b)};
    }

    root(params : NumericPair) : ApiResponse<number> {
        return {result: Math.pow(params.a, 1 / params.b)};
    }

    sin(param : number) : ApiResponse<number> {
        return {result: Math.round(Math.sin(param) * 10000) / 10000};
    }

    cos(param :number) : ApiResponse<number> {
        return {result: Math.round(Math.cos(param) * 10000) / 10000};
    }

    tan (param:number) : ApiResponse<number> {
        return {result: Math.round(Math.tan(param) * 10000) / 10000};
    }
}