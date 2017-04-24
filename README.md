Basic [eslint](https://eslint.org) rule configuration - intended to set a base from which to override for specific use-cases.

`eslintrc.js` example:

```js
module.exports = {
    root: true,
    extends: [
        '@maier/base'
    ],
    rules: {
        // ...additional project specific rules
    }
};
```
