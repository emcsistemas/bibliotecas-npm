const react = require("./react.js");

module.exports = {
  ...react,
  extends: [...react.extends, "plugin:@next/next/recommended"],
  plugins: [
    ...react.plugins,
    // O plugin do Next.js já é instalado junto com o next
  ],
  rules: {
    ...react.rules,
    // Adicione ou sobrescreva regras específicas para Next.js aqui, se necessário
  },
};
