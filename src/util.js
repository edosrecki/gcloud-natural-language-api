'use strict';

const _ = require('lodash');

const separator = _.repeat('-', 30);

/**
 * @param {string} header 
 */
const printHeader = (header) => {
  console.log(separator);
  console.log(_.upperCase(header));
  console.log(separator);
};

/**
 * @param {Object.string, string|number>} rows 
 * @param {boolean} [newline=false]
 * @param {boolean} [ident=false]
 */
const printRows = (rows, newline = false, ident = false) => {
  const padding = _.max(
    _.map(_.keys(rows), 'length')
  );

  _.forEach(rows, (v, k) => {
    let name = _.padEnd(k, padding);
    if (ident) name = `    ${name}`;

    console.log(`${name}: ${v}`);
  });

  if (newline) console.log();
}

module.exports = {
  printHeader,
  printRows
};
