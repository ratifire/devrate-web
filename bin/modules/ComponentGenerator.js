import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { COMPONENT_TYPES } from '../constants/index.js';
import Templates from '../templates/Templates.js';
import { logger } from '../utils/index.js';

class ComponentGenerator {
  constructor() {
    this.filename = fileURLToPath(import.meta.url);
    this.dirname = path.dirname(this.filename);
    this.projectRoot = path.resolve(this.dirname, '../..');
    this.templates = new Templates();
  }

  generate({ type, name }) {
    const generators = {
      [COMPONENT_TYPES.COMPONENT]: this.#generateComponent.bind(this),
      [COMPONENT_TYPES.SLICE]: this.#generateSlice.bind(this),
      [COMPONENT_TYPES.PAGE]: this.#generatePage.bind(this),
      [COMPONENT_TYPES.API_SLICE]: this.#generateApiSlice.bind(this),
    };

    return generators[type]({ name });
  }

  async #generateComponent({ name }) {
    const componentName = this.#capitalizeFirstLetter(name);
    const component = this.templates.component({ name: componentName });
    const index = this.templates.index({ name: componentName });
    const style = this.templates.styles();
    const componentDir = path.join(this.projectRoot, 'src', 'components', componentName);

    try {
      await fs.mkdir(componentDir);

      await fs.writeFile(path.join(componentDir, `${componentName}.jsx`), component);
      await fs.writeFile(path.join(componentDir, 'index.js'), index);
      await fs.writeFile(path.join(componentDir, `${componentName}.styles.js`), style);

      logger.info(`Component ${name} was successfully created in ${componentDir}`);
    } catch (error) {
      logger.error(error);
      process.exit(1);
    }
  }

  async #generatePage({ name }) {
    const pageName = `${this.#capitalizeFirstLetter(name)}Page`;
    const component = this.templates.component({ name: pageName });
    const index = this.templates.index({ name: pageName });
    const style = this.templates.styles();
    const componentDir = path.join(this.projectRoot, 'src', 'pages', pageName);

    try {
      await fs.mkdir(componentDir);

      await fs.writeFile(path.join(componentDir, `${pageName}.jsx`), component);
      await fs.writeFile(path.join(componentDir, 'index.js'), index);
      await fs.writeFile(path.join(componentDir, `${pageName}.styles.js`), style);

      logger.info(`Page ${name} was successfully created in ${componentDir}`);
    } catch (error) {
      logger.error(error);
      process.exit(1);
    }
  }

  async #generateSlice({ name }) {
    const folderName = this.#lowercaseFirstLetter(name);
    const slice = `${folderName}Slice`;
    const sliceTemplate = this.templates.slice({ name: slice, sliceName: folderName });
    const sliceDir = path.join(this.projectRoot, 'src', 'redux', 'slices', folderName);

    try {
      await fs.mkdir(sliceDir);
      await fs.writeFile(path.join(sliceDir, `${slice}.js`), sliceTemplate);
      logger.info(`Slice ${slice} was successfully created in ${sliceDir}`);
    } catch (error) {
      logger.error(error);
      process.exit(1);
    }
  }

  async #generateApiSlice({ name }) {
    const folderName = this.#lowercaseFirstLetter(name);
    const slice = `${folderName}ApiSlice`;
    const sliceTemplate = this.templates.apiSlice({ name: slice });
    const sliceDir = path.join(this.projectRoot, 'src', 'redux', 'api', 'slices', folderName);

    try {
      await fs.mkdir(sliceDir);
      await fs.writeFile(path.join(sliceDir, `${slice}.js`), sliceTemplate);
      logger.info(`API slice ${slice} was successfully created in ${sliceDir}`);
    } catch (error) {
      logger.error(error);
      process.exit(1);
    }
  }

  #capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  #lowercaseFirstLetter(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
  }
}

export default ComponentGenerator;
