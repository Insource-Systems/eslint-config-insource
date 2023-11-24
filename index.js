module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@stylistic/js',
  ],
  rules: {
    // The rules below are listed in the order in which they are listed on the
    // eslint rules page. All rules are listed to stay in sync.
    // https://eslint.org/docs/latest/rules/

    // Possible Problems
    // https://eslint.org/docs/latest/rules/#possible-problems
    // -------------------------------------------------------

    // 'array-callback-return': 'off',
    'constructor-super': 'error', // eslint:recommended
    // 'for-direction': 'error', // eslint:recommended
    'getter-return': 'error', // eslint:recommended
    // 'no-async-promise-executor': 'error', // eslint:recommended
    // 'no-await-in-loop': 'off',
    // 'no-class-assign': 'error', // eslint:recommended
    // 'no-compare-neg-zero': 'error', // eslint:recommended
    'no-cond-assign': 'off', // eslint:recommended
    // 'no-const-assign': 'error', // eslint:recommended
    // 'no-constant-binary-expression': 'off',
    // 'no-constant-condition': 'error', // eslint:recommended
    // 'no-constructor-return': 'off',
    // 'no-control-regex': 'error', // eslint:recommended
    // 'no-debugger': 'error', // eslint:recommended
    // 'no-dupe-args': 'error', // eslint:recommended
    // 'no-dupe-class-members': 'error', // eslint:recommended
    // 'no-dupe-else-if': 'error', // eslint:recommended
    // 'no-dupe-keys': 'error', // eslint:recommended
    // 'no-duplicate-case': 'error', // eslint:recommended
    // 'no-duplicate-imports': 'off',
    // 'no-empty-character-class': 'error', // eslint:recommended
    // 'no-empty-pattern': 'error', // eslint:recommended
    'no-ex-assign': 'error', // eslint:recommended
    'no-fallthrough': 'error', // eslint:recommended
    'no-func-assign': 'error', // eslint:recommended
    'no-import-assign': 'error', // eslint:recommended
    // 'no-inner-declarations': 'error', // eslint:recommended
    // 'no-invalid-regexp': 'error', // eslint:recommended
    'no-irregular-whitespace': 'error', // eslint:recommended
    'no-loss-of-precision': 'error', // eslint:recommended
    // 'no-misleading-character-class': 'error', // eslint:recommended
    // 'no-new-native-nonconstructor': 'off',
    'no-new-symbol': 'error', // eslint:recommended
    // 'no-obj-calls': 'error', // eslint:recommended
    // 'no-promise-executor-return': 'off',
    // 'no-prototype-builtins': 'error', // eslint:recommended
    'no-self-assign': 'error', // eslint:recommended
    // 'no-self-compare': 'off',
    // 'no-setter-return': 'error', // eslint:recommended
    // 'no-sparse-arrays': 'error', // eslint:recommended
    // 'no-template-curly-in-string': 'off',
    'no-this-before-super': 'error', // eslint:recommended
    // 'no-undef': 'error', // eslint:recommended
    'no-unexpected-multiline': 'error', // eslint:recommended
    // 'no-unmodified-loop-condition': 'off',
    'no-unreachable': 'error', // eslint:recommended
    // 'no-unreachable-loop': 'off',
    // 'no-unsafe-finally': 'error', // eslint:recommended
    // 'no-unsafe-negation': 'error', // eslint:recommended
    // 'no-unsafe-optional-chaining': 'error', // eslint:recommended
    // 'no-unused-private-class-members': 'off',
    'no-unused-vars': 'error', // eslint:recommended
    // 'no-use-before-define': 'off',
    // 'no-useless-backreference': 'error', // eslint:recommended
    // 'require-atomic-updates': 'off',
    // 'use-isnan': 'error', // eslint:recommended
    // 'valid-typeof': 'error', // eslint:recommended

    // Suggestions
    // https://eslint.org/docs/latest/rules/#suggestions
    // -------------------------------------------------

    // 'accessor-pairs': 'off',
    // 'arrow-body-style': 'off',
    // 'block-scoped-var': 'off',
    // 'camelcase': 'off',
    // 'capitalized-comments': 'off',
    // 'class-methods-use-this': 'off',
    // 'complexity': 'off',
    // 'consistent-return': 'off',
    // 'consistent-this': 'off',
    'curly': ['error', 'multi-line'],
    // 'default-case': 'off',
    // 'default-case-last': 'off',
    // 'default-param-last': 'off',
    // 'dot-notation': 'off',
    // 'eqeqeq': 'off',
    // 'func-name-matching': 'off',
    // 'func-names': 'off',
    // 'func-style': 'off',
    // 'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    // 'id-denylist': 'off',
    // 'id-length': 'off',
    // 'id-match': 'off',
    // 'init-declarations': 'off',
    // 'logical-assignment-operators': 'off',
    // 'max-classes-per-file': 'off',
    // 'max-depth': 'off',
    // 'max-lines': 'off',
    // 'max-lines-per-function': 'off',
    // 'max-nested-callbacks': 'off',
    // 'max-params': 'off',
    // 'max-statements': 'off',
    // 'multiline-comment-style': 'off',
    'new-cap': 'error',
    // 'no-alert': 'off',
    // 'no-array-constructor': 'off',
    // 'no-bitwise': 'off',
    'no-caller': 'error',
    // 'no-case-declarations': 'error', // eslint:recommended
    // 'no-console': 'off',
    // 'no-continue': 'off',
    // 'no-delete-var': 'error', // eslint:recommended
    // 'no-div-regex': 'off',
    // 'no-else-return': 'off',
    // 'no-empty': 'error', // eslint:recommended
    // 'no-empty-function': 'off',
    // 'no-empty-static-block': 'off',
    // 'no-eq-null': 'off',
    // 'no-eval': 'off',
    // 'no-extend-native': 'off',
    // 'no-extra-bind': 'off',
    // 'no-extra-boolean-cast': 'error', // eslint:recommended
    // 'no-extra-label': 'off',
    // 'no-global-assign': 'error', // eslint:recommended
    // 'no-implicit-coercion': 'off',
    // 'no-implicit-globals': 'off',
    // 'no-implied-eval': 'off',
    // 'no-inline-comments': 'off',
    // 'no-invalid-this': 'off',
    // 'no-iterator': 'off',
    // 'no-label-var': 'off',
    // 'no-labels': 'off',
    // 'no-lone-blocks': 'off',
    // 'no-lonely-if': 'off',
    // 'no-loop-func': 'off',
    // 'no-magic-numbers': 'off',
    // 'no-multi-assign': 'off',
    // 'no-multi-str': 'off',
    // 'no-negated-condition': 'off',
    // 'no-nested-ternary': 'off',
    // 'no-new': 'off',
    // 'no-new-func': 'off',
    // 'no-new-wrappers': 'off',
    'no-nonoctal-decimal-escape': 'error', // eslint:recommended
    // 'no-object-constructor': 'off',
    'no-octal': 'error', // eslint:recommended
    // 'no-octal-escape': 'off',
    // 'no-param-reassign': 'off',
    // 'no-plusplus': 'off',
    // 'no-proto': 'off',
    'no-redeclare': 'error', // eslint:recommended
    // 'no-regex-spaces': 'error', // eslint:recommended
    // 'no-restricted-exports': 'off',
    // 'no-restricted-globals': 'off',
    // 'no-restricted-imports': 'off',
    // 'no-restricted-properties': 'off',
    // 'no-restricted-syntax': 'off',
    // 'no-return-assign': 'off',
    // 'no-script-url': 'off',
    // 'no-sequences': 'off',
    // 'no-shadow': 'off',
    'no-shadow-restricted-names': 'error', // eslint:recommended
    // 'no-ternary': 'off',
    // 'no-throw-literal': 'off',
    // 'no-undef-init': 'off',
    // 'no-undefined': 'off',
    // 'no-underscore-dangle': 'off',
    // 'no-unneeded-ternary': 'off',
    // 'no-unused-expressions': 'off',
    'no-unused-labels': 'error', // eslint:recommended
    // 'no-useless-call': 'off',
    // 'no-useless-catch': 'error', // eslint:recommended
    // 'no-useless-computed-key': 'off',
    // 'no-useless-concat': 'off',
    // 'no-useless-constructor': 'off',
    // 'no-useless-escape': 'error', // eslint:recommended
    // 'no-useless-rename': 'off',
    // 'no-useless-return': 'off',
    'no-var': 'error',
    // 'no-void': 'off',
    // 'no-warning-comments': 'off',
    'no-with': 'error', // eslint:recommended
    // 'object-shorthand': 'off',
    // 'one-var': 'off',
    // 'operator-assignment': 'off',
    // 'prefer-arrow-callback': 'off',
    'prefer-const': ['error', {destructuring: 'all'}],
    // 'prefer-destructuring': 'off',
    // 'prefer-exponentiation-operator': 'off',
    // 'prefer-named-capture-group': 'off',
    // 'prefer-numeric-literals': 'off',
    // 'prefer-object-has-own': 'off',
    // 'prefer-object-spread': 'off',
    // 'prefer-promise-reject-errors': 'off',
    // 'prefer-regex-literals': 'off',
    // 'prefer-rest-params': 'off',
    // 'prefer-spread': 'off',
    // 'prefer-template': 'off',
    // 'radix': 'off',
    // 'require-await': 'off',
    // 'require-unicode-regexp': 'off',
    // 'require-yield': 'error', // eslint:recommended
    // 'sort-imports': 'off',
    // 'sort-keys': 'off',
    // 'sort-vars': 'off',
    // 'strict': 'off',
    // 'vars-on-top': 'off',
    // 'yoda': 'off',

    // Layout & Formatting
    // https://eslint.org/docs/latest/rules/#layout--formatting
    // --------------------------------------------------------

    // 'line-comment-position': 'off',
    // 'unicode-bom': 'off'

    // ESLint Stylistic JS
    // https://eslint.style/packages/js
    // --------------------------------

    '@stylistic/js/array-bracket-newline': 'off',
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    '@stylistic/js/array-element-newline': 'off',
    '@stylistic/js/arrow-parens': ['error', 'always'],
    // '@stylistic/js/arrow-spacing': 'off',
    '@stylistic/js/block-spacing': ['error', 'never'],
    '@stylistic/js/brace-style': 'error',
    '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/js/comma-spacing': 'error',
    '@stylistic/js/comma-style': 'error',
    '@stylistic/js/computed-property-spacing': 'error',
    // '@stylistic/js/dot-location': 'off',
    '@stylistic/js/eol-last': 'error',
    // '@stylistic/js/function-call-argument-newline': 'off',
    '@stylistic/js/function-call-spacing': 'error',
    // '@stylistic/js/function-paren-newline': 'off',
    '@stylistic/js/generator-star-spacing': ['error', 'after'],
    // '@stylistic/js/implicit-arrow-linebreak': 'off',
    '@stylistic/js/indent': ['error', 2],
    // '@stylistic/js/jsx-quotes': 'off',
    '@stylistic/js/key-spacing': 'error',
    '@stylistic/js/keyword-spacing': 'error',
    // '@stylistic/js/linebreak-style': 'off',
    // '@stylistic/js/lines-around-comment': 'off',
    // '@stylistic/js/lines-between-class-members': 'off',
    '@stylistic/js/max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreStrings: true
    }],
    // '@stylistic/js/max-statements-per-line': 'off',
    // '@stylistic/js/multiline-ternary': 'off',
    // '@stylistic/js/new-parens': 'off',
    // '@stylistic/js/newline-per-chained-call': 'off',
    // '@stylistic/js/no-confusing-arrow': 'off',
    // '@stylistic/js/no-extra-parens': 'off',
    // '@stylistic/js/no-extra-semi': 'off',
    // '@stylistic/js/no-floating-decimal': 'off',
    // '@stylistic/js/no-mixed-operators': 'off',
    '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
    // '@stylistic/js/no-multi-spaces': 'off',
    '@stylistic/js/no-multiple-empty-lines': ['error', {max: 2}],
    '@stylistic/js/no-tabs': 'error',
    '@stylistic/js/no-trailing-spaces': 'error',
    // '@stylistic/js/no-whitespace-before-property': 'off',
    // '@stylistic/js/nonblock-statement-body-position': 'off',
    // '@stylistic/js/object-curly-newline': 'off',
    '@stylistic/js/object-curly-spacing': 'error',
    // '@stylistic/js/object-property-newline': 'off',
    // '@stylistic/js/one-var-declaration-per-line': 'off',
    '@stylistic/js/operator-linebreak': ['error', 'after'],
    '@stylistic/js/padded-blocks': ['error', 'never'],
    // '@stylistic/js/padding-line-between-statements': 'off',
    '@stylistic/js/quote-props': ['error', 'consistent'],
    '@stylistic/js/quotes': ['error', 'single', {allowTemplateLiterals: true}],
    '@stylistic/js/rest-spread-spacing': 'error',
    '@stylistic/js/semi': 'error',
    '@stylistic/js/semi-spacing': 'error',
    // '@stylistic/js/semi-style': 'off',
    '@stylistic/js/space-before-blocks': 'error',
    '@stylistic/js/space-before-function-paren': ['error', {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never',
    }],
    // '@stylistic/js/space-in-parens': 'off',
    // '@stylistic/js/space-infix-ops': 'off',
    // '@stylistic/js/space-unary-ops': 'off',
    '@stylistic/js/spaced-comment': ['error', 'always'],
    '@stylistic/js/switch-colon-spacing': 'error',
    // '@stylistic/js/template-curly-spacing': 'off',
    // '@stylistic/js/template-tag-spacing': 'off',
    // '@stylistic/js/wrap-iife': 'off',
    // '@stylistic/js/wrap-regex': 'off',
    '@stylistic/js/yield-star-spacing': ['error', 'after'],
  },
};
