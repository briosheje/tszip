/**
 * Make an iterator that aggregates elements from each of the iterables.
 *
 * @example
 * ```ts
 * // Sample usage
 * let [a,b] = [[1,2],[3,4]];
 * let zipped = [...zip(a,b)]; // or Array.from(zip(a,b));
 * console.log(zipped); // [[1,3],[2,4]]
 * ```
 * @example
 * ```ts
 * // Usage as iterable.
 * let [a,b] = [[1,2],[3,4]];
 * for (var [c,d] of zip(a,b)) {
 *  // c will be 1, then 3
 *  // d will be 2, then 4.
 *  console.log('c id', c, 'd is ', d);
 * }
 * ```
 * @export
 * @param {...Array<any>[]} args
 * @returns {IterableIterator<any[]>}
 */
export declare function zip(...args: Array<any>[]): IterableIterator<any[]>;
