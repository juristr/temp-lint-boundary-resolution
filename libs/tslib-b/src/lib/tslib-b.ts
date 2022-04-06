import { libASayHello } from '@myorg/tslib-a';
import { someSelectivelyExportedFn } from '@myorg/tslib-a';
import '../../../tslib-a/src';

export function tslibB(): string {
  someSelectivelyExportedFn();
  libASayHello();
  return 'hi there';
}
