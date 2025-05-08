function formatString(input: string, toUpper?: boolean) {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
