module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    "node": true,
    "commonjs": true,
    "browser": true
  },
  parserOptions: {
    ecamVersion: 6,    
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: "standard",
  plugins: [
    "html",
    "react"
  ],
  "rules": {
    "semi": "error",
    "no-unused-vars": 0,
    "no-unused-expressions": 1
  },
  "settings": {
    "react": {
      "pragma": "React"
    }
  }
}