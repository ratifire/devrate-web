#!/usr/bin/env node
import ComponentGenerator from './modules/ComponentGenerator.js';
import getAnswers from './utils/getAnswers.js';

async function main() {
  const { type, name } = await getAnswers();

  const generator = new ComponentGenerator();

  generator.generate({ type, name });
}

main();
