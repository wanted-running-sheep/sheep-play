const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

const escapeRegExp = (string: string) => {
  return string && reHasRegExpChar.test(string)
    ? string.replace(reRegExpChar, '\\$&')
    : string || '';
};

export default escapeRegExp;
