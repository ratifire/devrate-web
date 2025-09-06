#!/usr/bin/env node

/* eslint-disable */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { componentTemplate, indexTemplate, stylesTemplate } from './templates/component-templ.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const type = args[0];
const name = args[1];

if (!type || !name) {
  console.error('Usage: node generate.js <type> <name>');
  process.exit(1);
}

const baseDir = path.resolve(projectRoot, 'src', type === 'component' ? 'components' : 'pages');
const componentDir = path.join(baseDir, name);

try {
  await fs.access(componentDir);
} catch (error) {
  console.error('Error creating component:', error);
  process.exit(1);
}

try {
  await fs.mkdir(componentDir, { recursive: true });
} catch (error) {
  console.error('Error creating component:', error);
  process.exit(1);
}

try {
  await fs.writeFile(componentDir, `${name}.jsx`, componentTemplate({ name }));
  await fs.writeFile(componentDir, 'index.js', indexTemplate({ name }));
  await fs.writeFile(componentDir, `${name}.styles.js`, stylesTemplate({ name }));

  console.log(`${type} "${name}" created successfully at ${componentDir}`);
} catch (error) {
  console.error('Error creating component:', error);
  process.exit(1);
}
