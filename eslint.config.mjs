import next from "eslint-config-next";

const config = [
  {
    ignores: ["node_modules", ".next", "public"],
  },
  ...next,
];

export default config;
