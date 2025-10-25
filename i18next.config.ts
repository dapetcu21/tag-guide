import { defineConfig } from 'i18next-cli';

export default defineConfig({
  locales: [
    "en",
    "ro"
  ],
  extract: {
    input: "app/**/*.{js,ts,jsx,tsx}",
    output: "app/locales/{{language}}/{{namespace}}.json"
  },
  types: {
    input: "app/locales/en/*.json",
    output: '@types/i18next.d.ts',
    resourcesFile: '@types/resources.d.ts',
  },
});
