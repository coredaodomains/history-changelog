module.exports = {
    root: true,
    extends: [
        '@cnsjs/eslint-config',
        '@cnsjs/eslint-config-nodejs'
    ],
    overrides: [
        {
            files: ['*.ts'],
            extends: ['@cnsjs/eslint-config-typescript'],
            rules: {
                // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34960
                'node/prefer-global/url': 'off',
            },
        },
        // {
        //     files: ['*.test.js', '*.test.ts'],
        //     extends: ['@cnsjs/eslint-config-jest'],
        // },
        {
            files: ['src/cli.ts'],
            rules: {
                'node/shebang': 'off',
            },
        },
    ],

    ignorePatterns: ['!.eslintrc.js', 'dist'],
};