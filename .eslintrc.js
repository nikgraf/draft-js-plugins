module.exports = {
  parser: 'babel-eslint',
  plugins: ['mocha', '@typescript-eslint', 'react-hooks', 'no-only-tests'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'react/jsx-indent': 0, //disabeld as it throws the error: "TypeError: Cannot read property 'type' of null"
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false },
        ],
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/no-empty-function': 1,

        //disable rules as we use @typescript-eslint/no-use-before-define
        'no-use-before-define': 0,
      },
    },
  ],
  env: {
    browser: true,
    mocha: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
  ],
  rules: {
    'no-multi-spaces': 0,
    'padded-blocks': 0,
    camelcase: 0,
    'react/sort-comp': 0,
    'no-cond-assign': 0,
    'react/no-did-update-set-state': 0,
    'no-restricted-syntax': 0,
    'no-lonely-if': 0,
    'no-prototype-builtins': 0,
    'no-console': 'error',
    'spaced-comment': 0,
    'space-before-function-paren': 0,
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    indent: 0,
    curly: 0,
    'max-len': 0,
    'comma-dangle': 0,
    'arrow-parens': 0,
    'no-underscore-dangle': 0,
    'new-cap': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'class-methods-use-this': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/extensions': 0,
    'jsx-a11y/img-has-alt': 0,
    'react/require-default-props': 0,
    'react/display-name': 1,

    'react/no-direct-mutation-state': 1,
  },
  settings: {
    'import/core-modules': [
      '@draft-js-plugins/alignment',
      '@draft-js-plugins/alignment/lib/plugin.css',
      '@draft-js-plugins/anchor',
      '@draft-js-plugins/anchor/lib/plugin.css',
      '@draft-js-plugins/buttons',
      '@draft-js-plugins/buttons/lib/plugin.css',
      '@draft-js-plugins/counter',
      '@draft-js-plugins/counter/lib/plugin.css',
      '@draft-js-plugins/utils',
      '@draft-js-plugins/drag-n-drop',
      '@draft-js-plugins/drag-n-drop/lib/plugin.css',
      '@draft-js-plugins/drag-n-drop-upload',
      '@draft-js-plugins/drag-n-drop-upload/utils/file',
      '@draft-js-plugins/drag-n-drop-upload/lib/plugin.css',
      '@draft-js-plugins/emoji',
      '@draft-js-plugins/emoji/lib/plugin.css',
      '@draft-js-plugins/focus',
      '@draft-js-plugins/focus/lib/plugin.css',
      '@draft-js-plugins/hashtag',
      '@draft-js-plugins/hashtag/lib/plugin.css',
      '@draft-js-plugins/image',
      '@draft-js-plugins/image/lib/plugin.css',
      '@draft-js-plugins/inline-toolbar',
      '@draft-js-plugins/inline-toolbar/lib/plugin.css',
      '@draft-js-plugins/linkify',
      '@draft-js-plugins/linkify/lib/plugin.css',
      '@draft-js-plugins/mention',
      '@draft-js-plugins/mention/lib/plugin.css',
      '@draft-js-plugins/editor',
      '@draft-js-plugins/editor/lib/plugin.css',
      '@draft-js-plugins/resizeable',
      '@draft-js-plugins/resizeable/lib/plugin.css',
      '@draft-js-plugins/side-toolbar',
      '@draft-js-plugins/side-toolbar/lib/plugin.css',
      '@draft-js-plugins/static-toolbar',
      '@draft-js-plugins/static-toolbar/lib/plugin.css',
      '@draft-js-plugins/sticker',
      '@draft-js-plugins/sticker/lib/plugin.css',
      '@draft-js-plugins/undo',
      '@draft-js-plugins/undo/lib/plugin.css',
      '@draft-js-plugins/video',
      '@draft-js-plugins/video/lib/plugin.css',
      '@draft-js-plugins/divider',
      '@draft-js-plugins/divider/lib/plugin.css',
    ],
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
};
