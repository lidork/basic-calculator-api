import basicFuncService from "../../services/basicfuncService"; 

describe('BasicFuncService', () => {
    let service: basicFuncService;

    beforeAll(() => {
        service = new basicFuncService();
      });

      test('add: should return the sum of two numbers', () => {
        expect(service.add({ a: 3, b: 5 })).toStrictEqual({"result" : 8});
        expect(service.add({ a: -2, b: 7 })).toStrictEqual({"result" : 5});
      });

      test('subtract: should return the difference of two numbers', () => {
        expect(service.subtract({ a: 3, b: 5})).toStrictEqual({"result" : -2});
        expect(service.subtract({ a: -2, b: -7 })).toStrictEqual({"result" : 5});
      });

      test('multiply: should return the product of two numbers', () => {
        expect(service.multiply({ a: 3, b: 5})).toStrictEqual({"result" : 15});
        expect(service.multiply({ a: 5, b: 3 })).toStrictEqual({"result" : 15});
        expect(service.multiply({ a: 3, b: -5})).toStrictEqual({"result" : -15});
        expect(service.multiply({ a: -2, b: -7 })).toStrictEqual({"result" : 14});
      });

      test('divide: should return the quotient of two numbers', () => {
        expect(service.divide({ a: 10, b: 5})).toStrictEqual({"result" : 2});
        expect(service.divide({ a: 5, b: 3 })).toStrictEqual({"result" : 1.6667});
        expect(service.divide({ a: 3, b: 0})).toStrictEqual({"error" : 'Cannot divide by zero'});
        expect(service.divide({ a: -2, b: -10 })).toStrictEqual({"result" : 0.2});
      });

      test('pow: should return the power of two numbers', () => {
        expect(service.pow({ a: 3, b: 2})).toStrictEqual({"result" : 9});
        expect(service.pow({ a: 2, b: 8 })).toStrictEqual({"result" : 256});
      });

      test('root: should return the b root of the number a ', () => {
        expect(service.root({ a: 64, b: 2})).toStrictEqual({"result" : 8});
        expect(service.root({ a: 256, b: 8 })).toStrictEqual({"result" : 2});
      });

      test('sin: should return the sin product of a number ', () => {
        expect(service.sin(90)).toStrictEqual({"result" : 0.894});
      });

      test('cos: should return the cos product of a number ', () => {
        expect(service.cos(1)).toStrictEqual({"result" : 0.5403});
      });

      test('tan: should return the tan product of a number ', () => {
        expect(service.tan(1)).toStrictEqual({"result" : 1.5574});
      });

    });