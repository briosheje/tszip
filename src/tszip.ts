// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"

/**
 * Make an iterator that aggregates elements from each of the iterables.
 *
 * @example
 * ```
 * // Sample usage
 * let [a,b] = [[1,2],[3,4]];
 * let zipped = [...zip(a,b)]; // or Array.from(zip(a,b));
 * console.log(zipped); // [[1,3],[2,4]]
 * ```
 * @example
 * ```
 * // Usage as iterable.
 * let [a,b] = [[1,2],[3,4]];
 * for (var [c,d] of zip(a,b)) {
 *  // c will be 1, then 3
 *  // d will be 2, then 4.
 *  console.log('c id', c, 'd is ', d);
 * ```
 * }
 * @export
 * @param {...Array<any>[]} args
 * @returns {IterableIterator<any[]>}
 */
export function* zip(...args: Array<any>[]): IterableIterator<any[]> {
  if (args.some(r => !Array.isArray(r))) {
    throw new Error("Zip function arguments must be instaces of arrays.");
  }
  const longestArray = args.reduce((curr: number, next: any[]) => {
    return curr = next.length > curr ? next.length : curr, curr;
  }, 0);
  for (let i = 0; i < longestArray; i++) {
    yield [...args.map(_ => _[i] || null)];
  }
}
