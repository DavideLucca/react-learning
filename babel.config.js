module.exports = {
    presets: [
        '@babel/preset-env', // converte o JS mais moderno para um mais antigo, seguindo o ambiente de uma aplicação
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
};