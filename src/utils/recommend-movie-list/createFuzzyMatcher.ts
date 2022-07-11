import escapeRegExp from './escapeRegExp';

export default function createFuzzyMatcher(input: string) {
  const pattern: string = input
    .split('')
    .map(escapeRegExp)
    .map(
      (pattern) => '([' + pattern.toLowerCase() + pattern.toUpperCase() + '])'
    )
    .join('.*?');
  return new RegExp(pattern);
}
