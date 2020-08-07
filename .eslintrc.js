module.exports = {
  "root": true,
  "globals": {
    "GIT_COMMIT": true
  },
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  "rules": {
    "no-console": "off",
    "vue/no-v-html": "off",
    "vue/no-template-shadow": "off"
  },
  "parserOptions": {
    "parser": "babel-eslint"
  }
}