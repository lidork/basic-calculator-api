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
      return {result: params.a / params.b};
    }
}