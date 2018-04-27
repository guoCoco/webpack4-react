//  webpack 基础配置： 基础的配置项
let config = {
	entry: {
		'index': './entryBuild/index.js',
		'shop': './entryBuild/shop.js'
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css', '.pcss'], //配置需要解析的文件后缀
	}
}

module.exports = config;