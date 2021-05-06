'use strict';

const { printHeader, printRows } = require('./util');

const contents = [
  'This code lab is amazing!',
  'I hate rainy days! I just do not feel like doing anything. It is so bad.'
];

const sentimentAnalysis = async (client) => {
  printHeader('Sentiment Analysis');

  for (const content of contents) {
    const document = {
      content,
      language: 'en',
      type: 'PLAIN_TEXT'
    };

    const [result] = await client.analyzeSentiment({ document });
    const { score, magnitude } = result.documentSentiment;

    printRows({
      'Text': content,
      'Sentiment': (score > 0 ? 'positive' : 'negative'),
      'Score': score,
      'Magnitude': magnitude
    }, true);
  }
};

module.exports = { sentimentAnalysis };
