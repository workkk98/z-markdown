const mdParser = require('markdown-it')();
const multimdTable = require('markdown-it-multimd-table');

mdParser.use(multimdTable, {
  rowspan: true,
  multiline: true
});

// options: target
module.exports = function main (source, options) {
  const mdText = mdParser.render(source);

  // TODO: 边界处理，1.
  if (options.target === 'vue') {
    return `<template>${mdText}</template>\n<script></script>`
  }
  return mdText;
}