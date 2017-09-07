module.exports =  {
    'plugins': [
        'stylelint-order',
        'stylelint-selector-bem-pattern'
    ],
    'rules': {
        'order/declaration-block-order': [
            'custom-properties',
            'declarations'
        ],
        'plugin/selector-bem-pattern': {
            'componentName': '[A-Z]+',
            'componentSelectors': {
                'initial': '^\\.{componentName}(?:-[a-z]+)?$',
                'combined': '^\\.combined-{componentName}-[a-z]+$'
            },
            'utilitySelectors': '^\\.util-[a-z]+$'
        },
        // Color
        'color-hex-case': 'lower', // Specify lowercase or uppercase for hex colors.
        'color-hex-length': 'long', // Specify short or long notation for hex colors.
        'color-named': 'never', // Require (where possible) or disallow named colors.
        'color-no-invalid-hex': true, // Disallow invalid hex colors.

        // Font family
        'font-family-name-quotes': 'always-unless-keyword', // Specify whether or not quotation marks should be used around font family names.
        'font-family-no-duplicate-names': true, // Disallow duplicate font family names.

        // Font weight
        'font-weight-notation': 'numeric', // Require numeric or named (where possible) font-weight values.

        // Function
        'function-calc-no-unspaced-operator': true, // Disallow an unspaced operator within calc functions.
        'function-comma-newline-after': 'never-multi-line', // Require a newline or disallow whitespace after the commas of functions.
        'function-comma-newline-before': 'never-multi-line', // Require a newline or disallow whitespace before the commas of functions.
        'function-comma-space-after': 'always', // Require a single space or disallow whitespace after the commas of functions.
        'function-comma-space-before': 'never', // Require a single space or disallow whitespace before the commas of functions.
        'function-max-empty-lines': 0, // Limit the number of adjacent empty lines within functions.
        'function-name-case': 'lower', // Specify lowercase or uppercase for function names.
        'function-parentheses-newline-inside': 'never-multi-line', // Require a newline or disallow whitespace on the inside of the parentheses of functions.
        // 'function-parentheses-space-inside': 'never', // Require a single space or disallow whitespace on the inside of the parentheses of functions.
        'function-url-quotes': 'always', // Require or disallow quotes for urls.
        // 'function-url-scheme-whitelist': Specify a whitelist of allowed url schemes.
        'function-whitespace-after': 'always', // Require or disallow whitespace after functions.

        // Number
        'number-leading-zero': 'always', // Require or disallow a leading zero for fractional numbers less than 1.
        'number-max-precision': 4, // Limit the number of decimal places allowed in numbers.
        'number-no-trailing-zeros': true, // Disallow trailing zeros in numbers.

        // String
        'string-no-newline': true, // Disallow (unescaped) newlines in strings.
        'string-quotes': 'single', // Specify single or double quotes around strings.

        // Length
        'length-zero-no-unit': true, // Disallow units for zero lengths.

        // Time
        'time-no-imperceptible': true, // Disallow animation and transition less than or equal to 100ms.

        // Unit
        'unit-case': 'lower', // Specify lowercase or uppercase for units.
        'unit-no-unknown': true, // Disallow unknown units.

        // Value
        'value-keyword-case': 'lower', // Specify lowercase or uppercase for keywords values.

        // Value list
        'value-list-comma-newline-after': 'never-multi-line', // Require a newline or disallow whitespace after the commas of value lists.
        'value-list-comma-newline-before': 'never-multi-line', // Require a newline or disallow whitespace before the commas of value lists.
        'value-list-comma-space-after': 'always', // Require a single space or disallow whitespace after the commas of value lists.
        'value-list-comma-space-before': 'never', // Require a single space or disallow whitespace before the commas of value lists.
        'value-list-max-empty-lines': 0, // Limit the number of adjacent empty lines within value lists.

        // Custom property
        'custom-property-empty-line-before': 'always', // Require or disallow an empty line before custom properties.
        'custom-property-no-outside-root': true, // Disallow custom properties outside of :root rules.
        'custom-property-pattern': 'string', // Specify a pattern for custom properties.

        // Shorthand property
        'shorthand-property-no-redundant-values': true, // Disallow redundant values in shorthand properties.

        // Property
        'property-case': 'lower', // Specify lowercase or uppercase for properties.
        'property-no-unknown': true, // Disallow unknown properties.


        // Keyframe declaration
        'keyframe-declaration-no-important': true, // Disallow !important within keyframe declarations.

        // Declaration
        'declaration-bang-space-after': 'never', // Require a single space or disallow whitespace after the bang of declarations.
        'declaration-bang-space-before': 'always', // Require a single space or disallow whitespace before the bang of declarations.
        'declaration-colon-space-after': 'always', // Require a single space or disallow whitespace after the colon of declarations.
        'declaration-colon-space-before': 'never', // Require a single space or disallow whitespace before the colon of declarations.
        'declaration-empty-line-before': 'never', // Require or disallow an empty line before declarations.


        // Declaration block
        'declaration-block-no-duplicate-properties': [ true, { ignore: [ 'consecutive-duplicates-with-different-values' ] } ], // Disallow duplicate properties within declaration blocks.
        'declaration-block-no-redundant-longhand-properties': true, // Disallow longhand properties that can be combined into one shorthand property.
        'declaration-block-no-shorthand-property-overrides': true, // Disallow shorthand properties that override related longhand properties within declaration blocks.
        'declaration-block-properties-order': 'alphabetical', // Specify the order of properties within declaration blocks.
        'declaration-block-semicolon-newline-after': 'always', // Require a newline or disallow whitespace after the semicolons of declaration blocks.
        // 'declaration-block-semicolon-space-after': 'never', // Require a single space or disallow whitespace after the semicolons of declaration blocks.
        // 'declaration-block-semicolon-space-before': 'never', // Require a single space or disallow whitespace before the semicolons of declaration blocks.
        'declaration-block-single-line-max-declarations': 1, // Limit the number of declaration within single line declaration blocks.
        'declaration-block-trailing-semicolon': 'always', // Require or disallow a trailing semicolon within declaration blocks.

        // Block
        'block-closing-brace-empty-line-before': 'never', // Require or disallow an empty line before the closing brace of blocks.
        'block-closing-brace-newline-after': 'always', // Require a newline or disallow whitespace after the closing brace of blocks.
        'block-closing-brace-newline-before': 'always', // Require a newline or disallow whitespace before the closing brace of blocks.
        // 'block-closing-brace-space-after': 'never', // Require a single space or disallow whitespace after the closing brace of blocks.
        // 'block-closing-brace-space-before': 'never', // Require a single space or disallow whitespace before the closing brace of blocks.
        'block-no-empty': true, // Disallow empty blocks.
        'block-no-single-line': true, //  Disallow single-line blocks.
        'block-opening-brace-newline-after': 'always', // Require a newline after the opening brace of blocks.
        // 'block-opening-brace-newline-before': 'never-multi-line', // Require a newline or disallow whitespace before the opening brace of blocks.
        // 'block-opening-brace-space-after': 'never', // Require a single space or disallow whitespace after the opening brace of blocks.
        'block-opening-brace-space-before': 'always', // Require a single space or disallow whitespace before the opening brace of blocks.

        // Selector
        'selector-attribute-brackets-space-inside': 'always', // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
        'selector-attribute-operator-space-after': 'always', // Require a single space or disallow whitespace after operators within attribute selectors.
        'selector-attribute-operator-space-before': 'always', // Require a single space or disallow whitespace before operators within attribute selectors.
        'selector-attribute-quotes': 'always', // Require or disallow quotes for attribute values.
        'selector-combinator-space-after': 'always', // Require a single space or disallow whitespace after the combinators of selectors.
        'selector-combinator-space-before': 'always', // Require a single space or disallow whitespace before the combinators of selectors.
        'selector-descendant-combinator-no-non-space': true, // Disallow non-space characters for descendant combinators of selectors.
        'selector-max-compound-selectors': 15, // Limit the number of compound selectors in a selector.
        'selector-max-specificity': '1,3,1', // Limit the specificity of selectors.
        'selector-no-empty': true, // Disallow empty selectors.
        'selector-no-universal': true, // Disallow the universal selector.
        'selector-pseudo-class-case': 'lower', // Specify lowercase or uppercase for pseudo-class selectors.
        'selector-pseudo-class-no-unknown': true, // Disallow unknown pseudo-class selectors.
        'selector-pseudo-class-parentheses-space-inside': 'always', // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
        'selector-pseudo-element-case': 'lower', // Specify lowercase or uppercase for pseudo-element selectors.
        'selector-pseudo-element-colon-notation': 'single', // Specify single or double colon notation for applicable pseudo-elements.
        'selector-pseudo-element-no-unknown': true, // Disallow unknown pseudo-element selectors.
        'selector-type-case': 'lower', // Specify lowercase or uppercase for type selector.
        'selector-type-no-unknown': null, // Disallow unknown type selectors.
        'selector-max-empty-lines': 0, // Limit the number of adjacent empty lines within selectors.

        // Selector list
        'selector-list-comma-newline-after': 'always', // Require a newline or disallow whitespace after the commas of selector lists.
        // 'selector-list-comma-space-after': 'never', // Require a single space or disallow whitespace after the commas of selector lists.
        'selector-list-comma-space-before': 'never', // Require a single space or disallow whitespace before the commas of selector lists.

        // Media feature
        'media-feature-colon-space-after': 'always', // Require a single space or disallow whitespace after the colon in media features.
        'media-feature-colon-space-before': 'never', // Require a single space or disallow whitespace before the colon in media features.
        'media-feature-name-case': 'lower', // Specify lowercase or uppercase for media feature names.
        'media-feature-name-no-unknown': true, // Disallow unknown media feature names.
        'media-feature-no-missing-punctuation': true, // Disallow missing punctuation for non-boolean media features.
        'media-feature-parentheses-space-inside': 'always', // Require a single space or disallow whitespace on the inside of the parentheses within media features.
        'media-feature-range-operator-space-after': 'always', // Require a single space or disallow whitespace after the range operator in media features.
        'media-feature-range-operator-space-before': 'never', // Require a single space or disallow whitespace before the range operator in media features.

        // Media query list
        'media-query-list-comma-space-after': 'always', // Require a single space or disallow whitespace after the commas of media query lists.
        'media-query-list-comma-space-before': 'never', // Require a single space or disallow whitespace before the commas of media query lists.

        // At-rule

        'at-rule-empty-line-before': 'never', // Require or disallow an empty line before at-rules.
        'at-rule-name-case': 'lower', // Specify lowercase or uppercase for at-rules names.
        // 'at-rule-name-newline-after': 'never', // Require a newline after at-rule names.
        'at-rule-name-space-after': 'always', // Require a single space after at-rule names.
        // 'at-rule-no-unknown': true, // Disallow unknown at-rules.
        'at-rule-semicolon-newline-after': 'always', // Require a newline after the semicolon of at-rules.

        // Root rule
        'root-no-standard-properties': true, // Disallow standard properties inside :root rules.

        // Comment
        'comment-empty-line-before': 'always', // Require or disallow an empty line before comments.
        'comment-no-empty': true, // Disallow empty comments.
        'comment-whitespace-inside': 'always', // Require or disallow whitespace on the inside of comment markers.

        'indentation': 2, // Specify indentation.
        'max-empty-lines': 2, // Limit the number of adjacent empty lines.
        // 'max-line-length': 30, // Limit the length of a line.
        'max-nesting-depth': [ 30, { ignore: [ 'at-rules-without-declaration-blocks' ] } ], // Limit the depth of nesting.
        'no-empty-source': true, // Disallow empty sources.
        'no-eol-whitespace': true, // Disallow end-of-line whitespace.
        'no-extra-semicolons': true, // Disallow extra semicolons.
        // 'no-indistinguishable-colors': [ true, { threshold: 3 } ], // Disallow colors that are suspiciously close to being identical.
        'no-invalid-double-slash-comments': true, // Disallow double-slash comments (//...) which are not supported by CSS.
        'no-missing-end-of-source-newline': true, // Disallow missing end-of-source newlines.
        'no-unknown-animations': true // Disallow animation names that do not correspond to a @keyframes declaration.

    }

};
