import { zip } from "../src/tszip"

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("Zip should be a function", () => {
    expect(typeof(zip)).toBe('function');
  })

  it("Zip should correctly zip a single array", () => {
    const _v = [1,2,3];
    const zipped = Array.from(zip(_v));
    expect(zipped[0][0] == 1).toBeTruthy();
  })

  it("Zip should correctly zip two arrays", () => {
    const [a, b] = [[1,2,3],[4,5,6]];
    let i = 0;
    for (const [c,d] of zip(a,b)) {
      expect(a[i]).toEqual(c);
      expect(b[i]).toEqual(d);
      i++;
    }
  })

  it("Zip should raise an exception if an invalid argument is passed", () => {
    let _error = null;
    try {
      const t = Array.from(zip('a' as any,1 as any,9 as any));
    }
    catch (e) {
      _error = e;
    }
    expect(_error).not.toBe(null);
  })

  it("Should hold <null> value at invalid indexes when arrays have different sizes", () => {
    let [short, long] = [[1],[1,2,3]];
    let i = 0;
    for (const [a,b] of zip(short, long)) {
      if (i > 0) {
        expect(a).toBeNull();
        expect(b).toBe(long[i]);
      }
      else {
        expect(a).toBe(short[i]);
        expect(b).toBe(long[i]);
      }
      i++;
    }
  })
})
