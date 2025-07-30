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
    .replace(/－/g, "-")
    .replace(/[０-９]/g, digit =>
      String.fromCharCode(digit.charCodeAt(0) - 0xfee0)
    );
  return Number(cleanedValue);
};
