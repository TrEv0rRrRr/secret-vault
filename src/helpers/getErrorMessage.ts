import { ERRORS } from "../consts/Errors";
import getRandomIndex from "./getRandomIndex";

const MAX_INDEX = ERRORS.length;

/**
 * Retrieves a random error message from a predefined list of errors.
 *
 * @returns {string} A randomly selected error message.
 */
export default function getErrorMessage(): string {
  const index = getRandomIndex(MAX_INDEX);

  return ERRORS[index];
}
