/** @type {import('tailwindcss').Config} */
const DesignTokensPreset = require('@zepdev/figma-design-tokens/tailwind/design-tokens.preset');

module.exports = {
  presets: [DesignTokensPreset],
  jit: true,
  content: ['./src/**/*.{ts,tsx}', './.storybook/provide-theme-variables.html','./node_modules/@zepdev/design-system-component-library-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      //TODO: remove this if preset provides the right tokens (@see https://jira.zeppelin.com/browse/DS-299)
      outlineWidth: {
        3: '3px',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
};
