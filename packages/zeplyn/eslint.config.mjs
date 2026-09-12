import * as library from '@zeplyn/internals/eslint-config/library';
import { defineConfig } from 'eslint/config';

export default defineConfig([...library.config]);
