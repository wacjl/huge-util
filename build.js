const { execSync } = require("child_process");
try {
  execSync("babel src/ -d dist");
  execSync("browserify dist/index.js > index.js");
} catch (error) {
  console.log(error);
}
