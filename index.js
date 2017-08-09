/* eslint-disable max-lines */
/* eslint-disable sort-keys */
/* eslint-disable no-magic-numbers */

// base eslint rule configuration
//
// extend and override

'use strict';

module.exports = {
    'extends'       : 'eslint:recommended',
    'parserOptions' : {
        ecmaVersion  : 8,
        sourceType   : 'module',
        ecmaFeatures : {
            globalReturn                 : false,
            impliedStruct                : false,
            jsx                          : false,
            experimentalObjectRestSpread : false
        }
    },
    'env': {
        'browser'             : false,
        'node'                : false,
        'commonjs'            : false,
        'shared-node-browser' : false,
        'es6'                 : false,
        'worker'              : false,
        'amd'                 : false,
        'mocha'               : false,
        'jasmine'             : false,
        'jest'                : false,
        'phantomjs'           : false,
        'protractor'          : false,
        'qunit'               : false,
        'jquery'              : false,
        'prototypejs'         : false,
        'shelljs'             : false,
        'meteor'              : false,
        'mongo'               : false,
        'applescript'         : false,
        'serviceworker'       : false,
        'atomtest'            : false,
        'embertest'           : false,
        'webextensions'       : false,
        'greasemonkey'        : false
    },
    'rules': {
        //
        // possible errors
        //
        'no-await-in-loop'      : 'error',
        'no-compare-neg-zero'   : 'error',
        'no-cond-assign'        : 'error',
        'no-console'            : 'error',
        'no-constant-condition' : [
            'error',
            { checkLoops: true }
        ],
        'no-control-regex'  : 'error',
        'no-debugger'       : 'error',
        'no-dupe-args'      : 'error',
        'no-dupe-keys'      : 'error',
        'no-duplicate-case' : 'error',
        'no-empty'          : [
            'error',
            { allowEmptyCatch: false }
        ],
        'no-empty-character-class' : 'error',
        'no-ex-assign'             : 'error',
        'no-extra-boolean-cast'    : 'error',
        'no-extra-parens'          : [
            'error',
            'all',
            {
                conditionalAssign       : false,
                returnAssign            : false,
                nestedBinaryExpressions : true, // see: no-mixed-operators
                ignoreJSX               : 'none'
            }
        ],
        'no-extra-semi'         : 'error',
        'no-func-assign'        : 'error',
        'no-inner-declarations' : [
            'error',
            'both'
        ],
        'no-invalid-regexp'       : 'error',
        'no-irregular-whitespace' : [
            'error',
            {
                skipStrings   : true,
                skipComments  : true,
                skipRegExps   : true,
                skipTemplates : true
            }
        ],
        'no-obj-calls'                : 'error',
        'no-prototype-builtins'       : 'error',
        'no-regex-spaces'             : 'error',
        'no-sparse-arrays'            : 'error',
        'no-template-curly-in-string' : 'error',
        'no-unexpected-multiline'     : 'error',
        'no-unreachable'              : 'error',
        'no-unsafe-finally'           : 'error',
        'no-unsafe-negation'          : 'error',
        'use-isnan'                   : 'error',
        'valid-jsdoc'                 : [
            'error',
            {
                prefer: {
                    'return' : 'returns',
                    'param'  : 'arg'
                },
                preferType: {
                    'object'  : 'Object',
                    'string'  : 'String',
                    'number'  : 'Number',
                    'boolean' : 'Boolean',
                    'bool'    : 'Boolean'
                },
                requireReturn     : true,
                requireReturnType : true,
                matchDescription  : '.+'
            }
        ],
        'valid-typeof': [
            'error',
            { requireStringLiterals: true }
        ],
        //
        // best practices
        //
        'accessor-pairs': [
            'error',
            {
                setWithoutGet : true,
                getWithoutSet : false
            }
        ],
        'array-callback-return'  : 'error',
        'block-scoped-var'       : 'error',
        'class-methods-use-this' : [
            'error',
            { exceptMethods: [] }
        ],
        'complexity': [
            'error',
            { max: 20 }
        ],
        'consistent-return': [
            'error',
            { treatUndefinedAsUnspecified: false }
        ],
        'curly': [
            'error',
            'all'
        ],
        'default-case': [
            'error',
            { commentPattern: '/^no default/i' }
        ],
        'dot-location': [
            'error',
            'object'
        ],
        'dot-notation': [
            'error',
            {
                allowKeywords : true,
                allowPattern  : ''
            }
        ],
        'eqeqeq': [
            'error',
            'always',
            { 'null': 'always' }
        ],
        'guard-for-in'         : 'error',
        'no-alert'             : 'error',
        'no-caller'            : 'error',
        'no-case-declarations' : 'error',
        'no-div-regex'         : 'error',
        'no-else-return'       : 'error',
        'no-empty-function'    : [
            'error',
            { allow: [] }
        ],
        'no-empty-pattern' : 'error',
        'no-eq-null'       : 'error',
        'no-eval'          : [
            'error',
            { allowIndirect: false }
        ],
        'no-extend-native': [
            'error',
            { exceptions: [] }
        ],
        'no-extra-bind'  : 'error',
        'no-extra-label' : 'error',
        'no-fallthrough' : [
            'error',
            { commentPattern: '/^break omitted/i' }
        ],
        'no-floating-decimal' : 'error',
        'no-global-assign'    : [
            'error',
            { exceptions: [] }
        ],
        'no-implicit-coercion': [
            'error',
            {
                'boolean' : true,
                'number'  : true,
                'string'  : true,
                'allow'   : []
            }
        ],
        'no-implicit-globals' : 'error',
        'no-implied-eval'     : 'error',
        'no-invalid-this'     : 'error',
        'no-iterator'         : 'error',
        'no-labels'           : [
            'error',
            {
                allowLoop   : false,
                allowSwitch : false
            }
        ],
        'no-lone-blocks'   : 'error',
        'no-loop-func'     : 'error',
        'no-magic-numbers' : [
            'error',
            {
                ignoreArrayIndexes : false,
                enforceConst       : false,
                detectObjects      : false
            }
        ],
        'no-multi-spaces': [
            'error',
            { 
                ignoreEOLComments: true,
                exceptions: { Property: true } 
            }
        ],
        'no-multi-str'      : 'error',
        'no-new'            : 'error',
        'no-new-func'       : 'error',
        'no-new-wrappers'   : 'error',
        'no-octal'          : 'error',
        'no-octal-escape'   : 'error',
        'no-param-reassign' : [
            'error',
            { props: true }
        ],
        'no-proto'          : 'error',
        'no-redeclare'      : [
            'error',
            { builtinGlobals: true }
        ],
        'no-restricted-properties': [
            'error',
            {
                property : '__defineGetter__',
                message  : 'Please use Object.defineProperty instead.'
            }
        ],
        'no-return-assign': [
            'error',
            'always'
        ],
        'no-return-await' : 'error',
        'no-script-url'   : 'error',
        'no-self-assign'  : [
            'error',
            { props: true }
        ],
        'no-self-compare'              : 'error',
        'no-sequences'                 : 'error',
        'no-throw-literal'             : 'error',
        'no-unmodified-loop-condition' : 'error',
        'no-unused-expressions'        : [
            'error',
            {
                allowShortCircuit    : false,
                allowTernary         : false,
                allowTaggedTemplates : false
            }
        ],
        'no-unused-labels'    : 'error',
        'no-useless-call'     : 'error',
        'no-useless-concat'   : 'error',
        'no-useless-escape'   : 'error',
        'no-useless-return'   : 'error',
        'no-void'             : 'error',
        'no-warning-comments' : [
            'error',
            {
                terms    : [ 'fixme:', 'fix:', 'bug:', 'tbd:' ],
                location : 'start'
            }
        ],
        'no-with'                      : 'error',
        'prefer-promise-reject-errors' : [
            'error',
            { allowEmptyReject: false }
        ],
        'radix': [
            'error',
            'always'
        ],
        'require-await' : 'error',
        'vars-on-top'   : 'error',
        'wrap-iife'     : [
            'error',
            'inside',
            { functionPrototypeMethods: true }
        ],
        'yoda': [
            'error',
            'never',
            {
                exceptRange  : false,
                onlyEquality : false
            }
        ],
        //
        // strict mode
        //
        'strict': [
            'error',
            'global'
        ],
        //
        // variables
        //
        'init-declarations': [
            'error',
            'always'
        ],
        'no-catch-shadow'       : 'off', // applies to IE8 and earlier only
        'no-delete-var'         : 'error',
        'no-label-var'          : 'error',
        'no-restricted-globals' : [
            'error',
            'event'
        ],
        'no-shadow': [
            'error',
            {
                builtinGlobals : true,
                hoist          : 'functions',
                allow          : []
            }
        ],
        'no-shadow-restricted-names' : 'error',
        'no-undef'                   : [
            'error',
            { 'typeof': false }
        ],
        'no-undef-init'  : 'error',
        'no-undefined'   : 'error',
        'no-unused-vars' : [
            'error',
            {
                vars                      : 'all',
                varsIgnoredPattern        : null,
                args                      : 'all',
                argsIgnorePattern         : '^_',
                caughtErrors              : 'all',
                caughtErrorsIgnorePattern : '^ignore',
                ignoreRestSiblings        : false
            }
        ],
        'no-use-before-define': [
            'error',
            {
                functions : true,
                classes   : true,
                variables : true
            }
        ],
        //
        // style
        //
        'array-bracket-spacing': [
            'error',
            'always',
            {
                singleValue     : true,
                objectsInArrays : true,
                arraysInArrays  : true
            }
        ],
        'block-spacing': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            '1tbs',
            { allowSingleLine: false }
        ],
        'camelcase'            : 'off',
        'capitalized-comments' : 'off',
        'comma-dangle'         : [
            'error',
            'never'
        ],
        'comma-spacing': [
            'error',
            {
                before : false,
                after  : true
            }
        ],
        'comma-style': [
            'error',
            'last',
            {
                exceptions: {
                    ArrayExpression          : false,
                    ArrayPattern             : false,
                    ArrrowFunctionExpression : false,
                    CallExpression           : false,
                    FunctionDeclaration      : false,
                    FunctionExpression       : false,
                    ImportDeclaration        : false,
                    ObjectExpression         : false,
                    ObjectPattern            : false,
                    VariableDeclaration      : false
                }
            }
        ],
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'consistent-this': [
            'error',
            'self'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'func-name-matching': [
            'error',
            'always',
            { includeCommonJSModuleExports: true }
        ],
        'func-names': [
            'error',
            'always'
        ],
        'func-style': [
            'error',
            'declaration',
            { allowArrowFunctions: true }
        ],
        'id-blacklist' : 'off',
        'id-length'    : [
            'error',
            {
                min        : 2,
                max        : 32,
                properties : 'always',
                exceptions : [
                    'i',
                    'j',
                    'k'
                ]
            }
        ],
        'id-match' : 'off',
        'indent'   : [
            'error',
            4,
            {
                SwitchCase         : 1,
                VariableDeclarator : {
                    'let'   : 1,
                    'const' : 1,
                    'var'   : 1
                },
                outerIIFEBody       : 1,
                MemberExpression    : 1,
                FunctionDeclaration : {
                    parameters : 'first',
                    body       : 1
                },
                FunctionExpression: {
                    parameters : 'first',
                    body       : 1
                },
                CallExpression   : { arguments: 'first' },
                ArrayExpression  : 'first',
                ObjectExpression : 'first'
            }
        ],
        'jsx-quotes'  : 'off',
        'key-spacing' : [
            'error',
            {
                singleLine: {
                    mode        : 'minimum',
                    beforeColon : false,
                    afterColon  : true
                },
                multiLine: {
                    mode        : 'minimum',
                    beforeColon : false,
                    afterColon  : true
                },
                align: {
                    mode        : 'minimum',
                    beforeColon : true,
                    afterColon  : true,
                    on          : 'colon'
                }
            }
        ],
        'keyword-spacing': [
            'error',
            {
                before    : true,
                after     : true,
                overrides : {}
            }
        ],
        'line-comment-position' : 'off',
        'linebreak-style'       : [
            'error',
            'unix'
        ],
        'lines-around-comment'   : 'off',
        'lines-around-directive' : [
            'error',
            'always'
        ],
        'max-depth': [
            'error',
            { max: 4 }
        ],
        'max-len': [
            'error',
            {
                code                   : 80,
                tabWidth               : 4,
                ignoreComments         : true,
                ignoreTrailingComments : true,
                ignoreUrls             : true,
                ignoreStrings          : true,
                ignoreTemplateLiterals : true,
                ignoreRegExpLiterals   : true
            }
        ],
        'max-lines': [
            'error',
            {
                max            : 500,
                skipBlankLines : true,
                skipComments   : true
            }
        ],
        'max-nested-callbacks': [
            'error',
            { max: 2 }
        ],
        'max-params': [
            'error',
            { max: 4 }
        ],
        'max-statements': [
            'error',
            { max: 15 },
            { ignoreTopLevelFunctions: true }
        ],
        'max-statements-per-line': [
            'error',
            { max: 1 }
        ],
        'multiline-ternary' : 'off',
        'new-cap'           : [
            'error',
            {
                newIsCap                 : true,
                newIsCapExceptions       : [],
                newIsCapExceptionPattern : '',
                capIsNew                 : true,
                capIsNewExceptions       : [],
                capIsNewExceptionPattern : '',
                properties               : true
            }
        ],
        'new-parens'        : 'error',
        'newline-after-var' : [
            'error',
            'always'
        ],
        'newline-before-return'    : 'error',
        'newline-per-chained-call' : [
            'error',
            { ignoreChainWithDepth: 2 }
        ],
        'no-array-constructor' : 'error',
        'no-bitwise'           : [
            'error',
            {
                allow     : [],
                int32Hint : true
            }
        ],
        'no-continue'        : 'off',
        'no-inline-comments' : 'off',
        'no-lonely-if'       : 'error',
        'no-mixed-operators' : [
            'error',
            {
                groups: [
                    [ '+', '-', '*', '/', '%', '**' ],
                    [ '&', '|', '^', '~', '<<', '>>', '>>>' ],
                    [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
                    [ '&&', '||' ],
                    [ 'in', 'instanceof' ]
                ],
                allowSamePrecedence: true
            }
        ],
        'no-mixed-spaces-and-tabs' : 'error',
        'no-multi-assign'          : 'error',
        'no-multiple-empty-lines'  : [
            'error',
            {
                max    : 2,
                maxEOF : 1,
                maxBOF : 0
            }
        ],
        'no-negated-condition' : 'error',
        'no-nested-ternary'    : 'error',
        'no-new-object'        : 'error',
        'no-plusplus'          : [
            'error',
            { allowForLoopAfterthoughts: true }
        ],
        'no-restricted-syntax' : 'off',
        'no-tabs'              : 'error',
        'no-ternary'           : 'off',
        'no-trailing-spaces'   : 'error',
        'no-underscore-dangle' : [
            'error',
            {
                allow           : [],
                allowAfterThis  : true,
                allowAfterSuper : true
            }
        ],
        'no-unneeded-ternary': [
            'error',
            { defaultAssignment: true }
        ],
        'no-whitespace-before-property'    : 'error',
        'nonblock-statement-body-position' : 'off',
        'object-curly-newline'             : [
            'error',
            { multiline: true }
        ],
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects  : true,
                objectsInObjects : true
            }
        ],
        'object-property-newline': [
            'error',
            { allowMultiplePropertiesPerLine: true }
        ],
        'one-var': [
            'error',
            'never'
        ],
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        'operator-assignment': [
            'error',
            'always'
        ],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?' : 'before',
                    ':' : 'before'
                }
            }
        ],
        'padded-blocks': [
            'error',
            {
                blocks   : 'never',
                classes  : 'always',
                switches : 'never'
            }
        ],
        'quote-props': [
            'error',
            'consistent-as-needed',
            { keywords: true }
        ],
        'quotes': [
            'error',
            'single',
            {
                avoidEscape           : true,
                allowTemplateLiterals : true
            }
        ],
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration     : true,
                    MethodDefinition        : true,
                    ClassDeclaration        : false,
                    ArrowFunctionExpression : false
                }
            }
        ],
        'semi': [
            'error',
            'always',
            { omitLastInOneLineBlock: false }
        ],
        'semi-spacing': [
            'error',
            {
                before : false,
                after  : true
            }
        ],
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive : true,
                natural       : true
            }
        ],
        'sort-vars': [
            'error',
            { ignoreCase: true }
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': [
            'error',
            { int32Hint: false }
        ],
        'space-unary-ops': [
            'error',
            {
                words    : true,
                nonwords : false
            }
        ],
        'spaced-comment': [
            'error',
            'always'
        ],
        'template-tag-spacing': [
            'error',
            'never'
        ],
        'unicode-bom': [
            'error',
            'never'
        ],
        'wrap-regex'       : 'error',
        //
        // es6
        //
        'arrow-body-style' : [
            'error',
            'always'
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'arrow-spacing': [
            'error',
            {
                before : true,
                after  : true
            }
        ],
        'constructor-super'      : 'error',
        'generator-star-spacing' : [
            'error',
            {
                before : true,
                after  : false
            }
        ],
        'no-class-assign'       : 'error',
        'no-confusing-arrow'    : 'error',
        'no-const-assign'       : 'error',
        'no-dupe-class-members' : 'error',
        'no-duplicate-imports'  : [
            'error',
            { includeExports: true }
        ],
        'no-new-symbol'           : 'error',
        'no-restricted-imports'   : 'off',
        'no-this-before-super'    : 'error',
        'no-useless-computed-key' : 'error',
        'no-useless-constructor'  : 'error',
        'no-useless-rename'       : 'error',
        'no-var'                  : 'error',
        'object-shorthand'        : [
            'error',
            'always',
            {
                avoidQuotes               : false,
                ignoreConstructors        : false,
                avoidExplicitReturnArrows : true
            }
        ],
        'prefer-arrow-callback'   : 'error',
        'prefer-const'            : 'error',
        'prefer-destructuring'    : 'error',
        'prefer-numeric-literals' : 'error',
        'prefer-rest-params'      : 'error',
        'prefer-spread'           : 'error',
        'prefer-template'         : 'error',
        'require-yield'           : 'error',
        'rest-spread-spacing'     : 'error',
        'sort-imports'            : 'error',
        'symbol-description'      : 'error',
        'template-curly-spacing'  : [
            'error',
            'never'
        ],
        'yield-star-spacing': [
            'error',
            {
                before : true,
                after  : false
            }
        ]
    }
};
