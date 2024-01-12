/** Utility type that ensures that at least one property in T exists */
export type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
  }[keyof T]



/**
 * Utility type that explodes T into single properties
 * credit Keith Layne 
 */
type Explode<T> = keyof T extends infer K
  ? K extends unknown
  ? { [I in keyof T]: I extends K ? T[I] : never }
  : never
  : never;
  

export type AtMostOne<T> = Explode<Partial<T>>;
export type AtLeastOne<T, U = {[K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U]
export type ExactlyOne<T> = AtMostOne<T> & AtLeastOne<T>

export type InArray<T,X> = 
  // See if X is the first element of T
  T extends readonly [X, ...infer _REST]  ? true
  // else check if X is the only element in T
    : T extends readonly [X] 
        ? true
        : T extends readonly [infer _, ...infer REST] 
        ? InArray<REST, X> 
  : false

  export type UniqueArray<T> =
  T extends readonly [infer X, ...infer Rest]
    ? InArray<Rest, X> extends true
      ? ['Encountered value with duplicates:', X]
      : readonly [X, ...UniqueArray<Rest>]
    : T
