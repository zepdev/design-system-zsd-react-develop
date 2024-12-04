import { create } from '@storybook/theming/create';
import { version } from '../package.json';

const libVersion = process.env.NODE_ENV === 'development' ? `DEVELOPMENT PREVIEW` : `v${version}`;

export default create({
  base: 'light',
  brandTitle: `Power Systems\nReact Component Library\n${libVersion}`,
});
