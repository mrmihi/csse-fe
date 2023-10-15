module.exports = {
  root: true,
  env: { browser: true, es2020: true, node:true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
      "react-hooks/exhaustive-deps": "off",
      "react-refresh/only-export-components": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
  },
<<<<<<< HEAD
};
=======
}

>>>>>>> 00c1858bf99a0288206632d2ed4b2d97b92365b1
