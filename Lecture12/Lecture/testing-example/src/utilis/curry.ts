type IFn<Arg> = (a: Arg, b: Arg) => Arg;

export function curry<Arg>(fn: IFn<Arg>) {
  return function curried(a: Arg) {
    return function (b: Arg) {
      return fn(a, b);
    };
  };
}
