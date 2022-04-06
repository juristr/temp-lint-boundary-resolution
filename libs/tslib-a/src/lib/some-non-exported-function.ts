export function someNonPublicLibFunction() {
  return 'this function is exported, but not via the libs barrel file';
}

export function someSelectivelyExportedFn() {
  return 'this fn is exported selectively in the barrel file';
}
