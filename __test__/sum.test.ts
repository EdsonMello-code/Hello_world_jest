import sum from '../src/sum';

interface IData {
  one: number;
  two?: number;
}

describe('Init', () => {
  it('Should to return 3 of function sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
    
  it('Should to return numbers positive is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  it('Should to return object assignment', () => {
    const data: IData = { one: 1 }

    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});

describe('Value', () => {
  it('Should to return a value null', () => {
    const n = null;

    expect(n).toBeNull();
  });

  it('Should to return a not undefined', () => {
    const n = 1;

    expect(n).toBeDefined();
  });

  it('Should to return a value undefined', () => {
    const n = undefined;

    expect(n).toBeUndefined();
  });

  it('Should to return a value invalid', () => {
    const z = 23;
    
    expect(z).toBeTruthy();
  });

  it('Should to return a value not invalid', () => {
    const z = undefined;
    expect(z).toBeFalsy();
  });
});