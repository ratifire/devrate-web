export function convertMiliInYears(mSeconds) {
  const MILLISECONDS_IN_YEAR = 31536000000;
  return Math.floor(mSeconds / MILLISECONDS_IN_YEAR);
}
