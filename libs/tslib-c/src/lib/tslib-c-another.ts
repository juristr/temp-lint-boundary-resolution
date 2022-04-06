import { tslibC, SOME_CONSTANT, someFunc1, someFunc2 } from '@myorg/tslib-c';

export function someStuff() {
  someFunc1();
  someFunc2();
  tslibC();
  console.log(SOME_CONSTANT);
  return 'hi';
}
