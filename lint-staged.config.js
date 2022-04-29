// lint-staged.config.js
const fs = require("fs");
const micromatch = require("micromatch");
const ignore = fs.readFileSync(".eslintignore", "utf8");
const lines = ignore.match(/[^\r\n]+/g);

const eslint = (files) => {
  const match = micromatch.not(files, lines);
  return `eslint --fix --max-warnings 0 ${match.join(" ")}`;
};

const prettier = (files) => {
  const match = micromatch.not(files, lines);

  if (match.length > 0) {
    return `prettier --write ${match.join(" ")}`;
  } else {
    /* exit with success, we aren't checking anything.
       you have to provide husky with a command or else it will error (and
       stop the hook) */
    return `true`;
  }
};

module.exports = {
  "*.{js,ts,tsx}": [prettier, eslint],
  "*.{css}": "prettier --write",
};
