module.exports = {
  files: ['src/styles/*.css'],
  extends: "stylelint-config-standard",  
  rules: {
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "comment-empty-lint-before": [ "always", {
      "ignore": ["stylelint-command", "after-command"]
    }],
    "inedntation": ["tab", {
      "except": ["value"]
    }]
  }
}