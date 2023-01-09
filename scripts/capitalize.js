function capitalize(string) {
  const formatted = string.trim();
  return formatted[0].toUpperCase() + formatted.slice(1);
}
module.exports = capitalize;
