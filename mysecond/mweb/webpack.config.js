const argv = require("yargs-parser")(process.argv.slice(2));//
const merge = require('webpack-merge');//合并
console.log(argv);
//根据参数找到对应的文件
const _mode=argv.mode || "development";
const _mergeconfig=require(`./config/webpack.${_mode}.js`);

// 基本webpack
let webpackConfig={
    plugins:[]
}
console.log(_mergeconfig);