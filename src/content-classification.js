'use strict';

const { printHeader, printRows } = require('./util');

const contents = [
  `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment
  that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js
  lets developers use JavaScript to write command line tools and for server-side scripting.`,
  
  `Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal
  sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation
  of 8,848.86 m was most recently established in 2020 by the Nepali and Chinese authorities.`
];

const contentClassification = async (client) => {
  printHeader('Content Classification');

  for (const content of contents) {
    const document = {
      content,
      language: 'en',
      type: 'PLAIN_TEXT'
    };

    const [result] = await client.classifyText({ document });
    const { categories } = result;

    printRows({ 'Text': content });

    for (const { name, confidence } of categories) {
      printRows({
        'Name': name,
        'Confidence': confidence,
      }, true, true);
    }
  }
};

module.exports = { contentClassification };
