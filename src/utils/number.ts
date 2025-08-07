/**
 * Formats a number by adding commas as thousands separators.
 *
 * @param number - The number to format.
 * @returns The formatted number as a string.
 */
export const numberWithDelimiter = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Parses a string value into a number by removing thousands separators and handling
 * both half-width and full-width characters.
 *
 * @param value - The string value to parse.
 * @returns The parsed number.
 */
export const parseNumber = (value: string): number => {
  const cleanedValue = value
    .replace(/[,，]/g, "")
    .replace(/．/g, ".")
    .replace(/[ー－−‒–—―﹣－]/g, "-")
    .replace(/[０-９]/g, digit =>
      String.fromCharCode(digit.charCodeAt(0) - 0xfee0)
    );
  return Number(cleanedValue);
};

/**
 * Parses a string value into an integer by removing thousands separators, handling
 * both half-width and full-width characters, and removing the decimal part.
 *
 * @param value - The string value to parse. It can contain half-width or full-width characters
 *                for digits, commas, dot characters, and minus signs.
 * @returns The parsed integer.
 */
export const parseInteger = (value: string): number => {
  const parsedNumber = parseNumber(value);
  return Math.trunc(parsedNumber);
};
