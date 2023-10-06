// national
function findWordMax(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  let longestWord = wordList[0];
  for (let i = 0; i < wordList.length; i++) {
    const wordCurrent = wordList[i];
    if (wordCurrent.length > longestWord.length) {
      longestWord = wordCurrent;
    }
  }
  return longestWord;
}
console.log(findWordMax(['Quoc', 'ThanhQuoc', 'LeThanhQuoc']));

// foreach
function findMaxForeach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  let longestWord = wordList[0];
  wordList.forEach((currentWord) => {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  });
  return longestWord;
}

console.log(findMaxForeach(['Quoc', 'LeQuoc', 'abcsdddsss']));

// use reduce

function findWordMacReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  return wordList.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord,
  );
}

console.log(findWordMacReduce(['Quoc', 'LeThanhQuoc', 'Henry Will Son']));
//
function findWordMaxReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  wordList.reduce((longestWord, currentWord) => {
    if (currentWord > longestWord) return currentWord;
  });
}
console.log(findWordMaxReduce(['Quoc', 'LeThanhQuoc', 'Henry Will Son']));
