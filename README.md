## ServiceNow ESLint
ServiceNow ES5 ESLint configuration following the Airbnb ES5 Style Guide. This package includes global ServiceNow variables and some additional ESLint rules.
### Quick Start
---
1. Run this command in terminal
    ```
    npm i --save-dev eslint-config-snow
    ```
2. Add file called ".eslintrc" in your root directory
    * In the file add the following:
    ```json
    {
        "extends": "snow"
    }
    ```
3. Add a .js file to your project and begin coding! 👍

### Added Lint Rules
---
```json
rules: {
    "space-before-function-paren": [2, "never"],
    "func-names": 0,
    "no-use-before-define": [2, {
      "variables": false,
      "functions": false
    }],
    "no-plusplus": 0,
    "block-scoped-var": 0,
    "vars-on-top": 0,
    "brace-style": [2, "1tbs"],
    "semi": [2, "always"],
    "no-underscore-dangle": [2, {
      "allowAfterThis": true
    }]
  }
```

This was created from [eslint-config-servicenow](https://www.npmjs.com/package/eslint-config-servicenow) with some additional rules in the index.js file. 