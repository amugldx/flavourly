import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'react/no-unescaped-entities': 'warn',
			'@next/next/no-img-element': 'warn',
			'react-hooks/exhaustive-deps': 'warn',
			'jsx-a11y/alt-text': 'warn',
			'@typescript-eslint/no-require-imports': 'warn',
		},
	},
];

export default eslintConfig;
