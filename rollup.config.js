import typescript from '@rollup/plugin-typescript'
import jsonPlugin from '@rollup/plugin-json'
import external from 'rollup-plugin-peer-deps-external'
import { dts } from 'rollup-plugin-dts'
import licensePlugin from 'rollup-plugin-license'
import { join } from 'path'

const { dependencies = {}, main, module, types } = require('./package.json')

const inputFile = 'src/index.ts'

const commonBanner = licensePlugin({
  banner: {
    content: {
      file: join(__dirname, 'resources', 'license_banner.txt'),
    },
  },
})

const commonInput = {
  input: inputFile,
  plugins: [jsonPlugin(), typescript(), external(), commonBanner],
}

const commonOutput = {
  // name: 'MyFpJsLibrary', // Need for IIFE and UMD build. Name of global variable
  exports: 'named',
}

// Need for IIFE or UMD build
// const commonTerser = terserPlugin(require('./terser.config.js'))

export default [
  // UMD and IIFE build config
  // {
  //   ...commonInput,
  //   output: [
  //     // IIFE build for browser with adding globals to window
  //     {
  //       ...commonOutput,
  //       file: `${outputDirectory}/${artifactName}.js`,
  //       format: 'iife',
  //     },
  //     {
  //       ...commonOutput,
  //       file: `${outputDirectory}/${artifactName}.min.js`,
  //       format: 'iife',
  //       plugins: [commonTerser],
  //     },
  //
  //     // UMD for users who use Require.js or Electron and want to leverage them
  //     {
  //       ...commonOutput,
  //       file: `${outputDirectory}/${artifactName}.umd.js`,
  //       format: 'umd',
  //     },
  //     {
  //       ...commonOutput,
  //       file: `${outputDirectory}/${artifactName}.umd.min.js`,
  //       format: 'umd',
  //       plugins: [commonTerser],
  //     },
  //   ]
  // },
  // NPM bundles. They have all the dependencies excluded for end code size optimization.
  {
    ...commonInput,
    external: Object.keys(dependencies),
    output: [
      // CJS for usage with `require()`
      {
        ...commonOutput,
        file: main,
        format: 'cjs',
      },

      // ESM for usage with `import`
      {
        ...commonOutput,
        file: module,
        format: 'es',
      },
    ],
  },

  // TypeScript definition
  {
    ...commonInput,
    plugins: [dts(), commonBanner],
    output: {
      file: types,
      format: 'es',
    },
  },
]
