const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Define o modo explicitamente
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, 
  },
   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        type: 'javascript/auto', 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ],
            sourceType: 'module' // Força o reconhecimento de import/export
          }
        }
      },
      {
      test: /\.css$/,
      use: [
        'style-loader', // Injeta no HTML
        'css-loader'    // Lê o arquivo
      ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './public/index.html' 
    }),
  ],
  devServer: {
    static: './dist',
    hot: true, // Habilita recarregamento rápido
    port: 3000,
  },
};
