const path = require('path');

module.exports = {
  entry: './src/indexAbuelo.ts',
  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"], // Que agrega que se puedan leer las rutas con .css con el css loader
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
				test: /\.(png|jpeg|gif|jpg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './src/asset',
						},
					},
				],
			},
    ],
    
  },
  
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
};