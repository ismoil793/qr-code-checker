const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  reactStrictMode: true,
  env: {
    API_TOKEN: `KcAO*AVV<p*J]4FID=z71VSi#'yTnd+=I6Ij->)!OkxyoydWP:TA9R[S+H(,Th[`,
  },
};
