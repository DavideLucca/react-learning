const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), // arquivo de entrada da aplicação (src/index.js)
    output: { // qual arquivo que será gerado depois da conversão (bundle.js)
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
                // basicamente, toda vez que for precisar um arquivo .js, fora da node_modules, ele será convertido usando o Babel
            }
        ]
    },
};