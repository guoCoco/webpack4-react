const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const webpackFile = require('./webpack.file.conf.js');
const entryBuild = require('../entry/entry');
const webpackComConf = require('./webpack.com.conf.js');
// 删除开发目录
rimraf.sync(webpackFile.devDirectory);
// 创建开发目录
fs.mkdirSync(webpackFile.devDirectory);

// 生成html
let htmlCont = fs.readFileSync('index.html', "utf-8");
console.log(htmlCont);
let scriptInsert = `
  <script type=text/javascript src=js/manifest.js></script>
  <script type=text/javascript src=js/vendor.js></script>
  <script type=text/javascript src=js/common.js></script>
  <script type=text/javascript src=js/key.js></script>
`;

console.log(1, htmlCont.replace('js/key.js', 'js/' + entryBuild[0].name + '.js').replace('<%= htmlWebpackPlugin.options.title %>', webpackComConf.titleFun(entryBuild[0].name, entryBuild[0].title)))
htmlCont = htmlCont.replace('</body>', scriptInsert + '</body>');
entryBuild.map(data => {
  fs.writeFile(webpackFile.devDirectory + '/' + data.name + '.html', 
    htmlCont.replace('js/key.js', 'js/' + data.name + '.js').replace('<%= htmlWebpackPlugin.options.title %>', webpackComConf.titleFun(data.name, data.title)),
    'utf8',
    function(err) {if(err){
      return console.log(err);
    }
    });
});
