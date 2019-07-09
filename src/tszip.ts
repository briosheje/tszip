// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...

/**
 * Make an iterator that aggregates elements from each of the iterables.
 *
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
