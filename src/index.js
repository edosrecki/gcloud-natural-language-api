'use strict';

require('dotenv').config();

const { LanguageServiceClient } = require('@google-cloud/language');

const { sentimentAnalysis } = require('./sentiment-analysis');
const { entityAnalysis } = require('./entity-analysis');
const { syntaxAnalysis } = require('./syntax-analysis');
const { contentClassification } = require('./content-classification');

const client = new LanguageServiceClient();

const main = async () => {
  await sentimentAnalysis(client);
  await entityAnalysis(client);
  await syntaxAnalysis(client);
  await contentClassification(client);
};

main().catch(error => {
  console.error(error);
});

