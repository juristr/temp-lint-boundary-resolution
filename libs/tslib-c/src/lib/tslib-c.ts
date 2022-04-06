import { someFunc1, someFunc2, SOME_CONSTANT } from '@myorg/tslib-c';

export function tslibC(): string {
  someFunc1();
  someFunc2();
  console.log(SOME_CONSTANT);
  return 'tslib-c';
}
