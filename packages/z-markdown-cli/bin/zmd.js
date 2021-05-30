#!/usr/bin/env node

const { program } = require('commander');
const { description, version } = require('../package.json');

program
  .description(description)
  .arguments('<entry>')
  .option('-o, --output <output>', 'output file name')
  .action((entry, options, command) => {
    require('../src/index')({
      entry,
      ...options
    })
  })

program
  .version(`z-markdown-cli version: ${version}`)

program.parse(process.argv);