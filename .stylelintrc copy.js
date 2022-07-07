module.exports = {
  ignoreFiles: ['**/*.js', '**/*.md'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  customSyntax: 'postcss-scss',
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["mixin", "include","extend","for","if"]
      }],

  }

}
