import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'node:path';

// Docs: https://rsbuild.rs/config/
const buildTarget = process.env.BUILD_TARGET === 'dev' ? 'dev' : 'prod';
const distFolder = buildTarget === 'dev' ? 'dist/dev' : 'dist/prod';
const assetPrefix =
  buildTarget === 'dev' ? '/expense-management/dev/' : '/expense-management/';

export default defineConfig({
  output: {
    distPath: {
      root: path.resolve(process.cwd(), distFolder),
    },
    assetPrefix,
  },
  plugins: [pluginReact()],
});
