import _ from 'lodash';

const JUNIOR_KEY = 1;
const MIDDLE_KEY = 2;
const SENIOR_KEY = 3;

const lvlMastery = {
  [JUNIOR_KEY]: 'Junior',
  [MIDDLE_KEY]: 'Middle',
  [SENIOR_KEY]: 'Senior',
};

const lvlMasteryColor = {
  [JUNIOR_KEY]: '#25CBFF',
  [MIDDLE_KEY]: '#16FFB9',
  [SENIOR_KEY]: '#DAFE22',
};

const masteryLvl = _.invert(lvlMastery);

export { masteryLvl, lvlMastery, lvlMasteryColor };
