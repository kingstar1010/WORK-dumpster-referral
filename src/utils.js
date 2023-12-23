import { useState } from 'react';

export class AssertionError extends Error {}
/**Assertion helper, custom message and error type
 * @param {Boolean} condition The condition to assert as true
 * @param {string} message The error message to show if it failed
 * @param {AssertionError} error An AssertionError subclass to throw with
 */
export function _assert(condition, message = 'Assertion Error', error = AssertionError) {
  if (!condition) {
    throw new error(message);
  }
}

export function useConstructor(callBack = () => {}) {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
}
