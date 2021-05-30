'use strict';
const renderer = require('z-markdown-core');
const { readFile, writeFile } = require('./fileHandler');
const path = require('path');
const { curry } = require('lodash');

const absolutePathFn = curry(path.resolve, 2)(process.env.PWD);

function pluckOutput (output, options) {
  output = typeof output === 'string' ? output : '';
  if (!output) {
    const entryName = /\/(.*)\..*$/;
    const matchStr = options.entry.match(entryName);
    output = Array.isArray(matchStr) ? matchStr[1] : '';
  }
  return output;
}

// options: entry , [output]
async function main (options) {
  // 输入
  // TODO: 更好的参数
  const entryPath = absolutePathFn(options.entry);
  const outputPath = absolutePathFn(pluckOutput(options.output, options));
  const target = 'vue';

  let source = '';

  // TODO: 对大文件的处理
  try {
    // TODO这里的entry一定要是个绝对路径
    source = await readFile(entryPath)
  } catch (err) {
    throw err;
  }

  console.log(target);

  // 解析
  const output = renderer(source, {
    target
  });

  // 输出 
  try {
    await writeFile(outputPath, output)
  } catch (err) {
    console.error(err);
  }
}

module.exports = main;
