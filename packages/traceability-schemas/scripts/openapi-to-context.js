/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
const fs = require('fs');
const path = require('path');

const jsonldSchema = require('@transmute/jsonld-schema');
const stringify = require('json-stringify-deterministic');
const { schemas } = require('../services/schemas');
const rootTerms = require('./rootTerms.json');

const contextPath = path.resolve(
  __dirname,
  '../../../docs/contexts/traceability-v1.jsonld'
);

(async () => {
  console.log('🧪 build context from api');
  const context = jsonldSchema.schemasToContext(schemas, {
    version: 1.1,
    vocab: 'https://w3id.org/traceability/#undefinedTerm',
    id: '@id',
    type: '@type',
    rootTerms,
  });
  fs.writeFileSync(contextPath, stringify(context, { space: '  ' }));
})();
