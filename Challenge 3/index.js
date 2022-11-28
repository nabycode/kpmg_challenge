const object = { a: { b: { c: { d: 'e' } } } };
/**
 * @input: string in format a/b/c/x
 */
function getValueAtPath(object, input) {
  if (!input) return 'no path provided';

  // if we want another split key input we can change this.
  const currArr = input.split('/');
  const currentTarget = currArr[0];

  if (Object.keys(object).find((x) => x === currentTarget)) {
    if (currArr.length === 1) {
      return object[currentTarget];
    }
    const nextArr = currArr.slice(1).join('/');
    const nextObj = object[currentTarget];
    return getValueAtPath(nextObj, nextArr);
  } else {
    return 'key not found';
  }
}

console.log(getValueAtPath(object, 'a/b/c'));
console.log(getValueAtPath(object, 'x'));
console.log(getValueAtPath(object, ''));
console.log(getValueAtPath(object, 'a/b/x'));
console.log(getValueAtPath(object, 'a'));