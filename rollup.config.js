import typescript from '@rollup/plugin-typescript';
import { SourceMap } from 'module';

export default {
  input: 'src/main.ts',
  output: {
    dir: 'build',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript()],
};
