module.exports = {
  ignoreFiles: ['**/*.js', '**/*.md'],
  extends: 'stylelint-config-standard-scss',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'include',
          'extend',
          'for',
          'if',
          'use',
          'function',
          'return',
          'forward',
          'each',
          'debug',
          'at-root',
          'warn',
          'extend',
        ],
      },
    ],
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['IconFont','Calluna'],
      },
    ],
    'keyframes-name-pattern':null
  },
}
