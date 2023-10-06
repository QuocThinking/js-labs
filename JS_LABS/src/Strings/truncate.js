// length
// length <= maxLength => showFull
// length > maxLength : (maxLength - 1) + ellipsis(1 ký tự) : use Truncate

function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;

  const strFull = text.slice(0, maxLength - 1);

  return `${strFull}\u2026`;
}

console.log(truncate('Easy Frontend', 4));

// v1
function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;

  const shortStr = text.slice(0, maxLength - 1);

  return `${shortStr}\u2026`;
}
console.log(truncate('Easy Frontend', 5));
