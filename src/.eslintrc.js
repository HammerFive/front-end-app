const { join } = require('path')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    babelOptions: {
      configFile: join(__dirname, 'babel.config.js')
    }
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'prefer-const': 'error',
    'vue/no-v-html': 0,
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'vue/component-definition-name-casing': 0,
    'vue/html-indent': [
      'warn',
      2,
      {
        alignAttributesVertically: false
      }],
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 1, switchCase: 1 }
    ],
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 5,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false
    //     }
    //   }
    // ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    complexity: [1, 10],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'template-curly-spacing': 'off'
      }
    }
  ]
}
