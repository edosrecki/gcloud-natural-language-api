'use strict';

const { printHeader, printRows } = require('./util');

const content = 'Google Cloud Platform has got some amazing features!';

const syntaxAnalysis = async (client) => {
  printHeader('Syntax Analysis');

  const document = {
    content,
    language: 'en',
    type: 'PLAIN_TEXT'
  };

  const [result] = await client.analyzeSyntax({ document });
  const { sentences, tokens } = result;

  printRows({
    'Text': content,
    '# Sentences': sentences.length,
    '# Tokens': tokens.length
  });

  for (const { text, partOfSpeech, lemma } of tokens) {
    printRows({
      'Text': text.content,
      'Part of speech': partOfSpeech.tag,
      'Lemma': lemma,
    }, true, true);
  }
};

module.exports = { syntaxAnalysis };
