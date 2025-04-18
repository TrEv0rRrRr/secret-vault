/**
 * Generates a random integer between 0 (inclusive) and the specified maximum value (exclusive).
 *
 * @param max - The upper bound (exclusive) for the random number generation. Must be a positive number.
 * @returns A random integer between 0 (inclusive) and `max` (exclusive).
 */
export default function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}
