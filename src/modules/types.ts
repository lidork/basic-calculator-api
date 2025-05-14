//object classes

export interface CalcParams { 
    a: string;
    b: string;
}



//high-types

export type NumericPair = { a: number; b: number;} //parsing params for calculating
export type ApiSuccess<T> = { result: T }; 
export type ApiError   = { error: string };
export type ApiResponse<T> = ApiSuccess<T> | ApiError; //hold successful or error responses