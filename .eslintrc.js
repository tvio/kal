module.exports = {
  root: true,

  env: {
    node: true,
    browser:true,
         
  },

 parserOptions: {
   ecmaVersion: 2020,
},

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
     },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ]
};
