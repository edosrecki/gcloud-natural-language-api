'use strict';

const { printHeader, printRows } = require('./util');

const contents = [
  'Linux kernel was written by Linus Torvalds.',
  'I love being a software developer. I especially like Google Cloud.'
];

const entityAnalysis = async (client) => {
  printHeader('Entity Analysis');

  for (const content of contents) {
    const document = {
      content,
      language: 'en',
      type: 'PLAIN_TEXT'
    };

    const [result] = await client.analyzeEntities({ document });
    const { entities } = result;

    printRows({ 'Text': content });

    for (const { name, type, salience, metadata } of entities) {
      printRows({
        'Name': name,
        'Type': type,
        'Importance': salience,
        'Wikipedia URL': (metadata?.wikipedia_url ?? 'N/A')
      }, true, true);
    }
  }
};

module.exports = { entityAnalysis };
