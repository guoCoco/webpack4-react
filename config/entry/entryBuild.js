const fs = require('fs');
const path = require('path');
const entry = require('./entry.js');
const rimraf = require('rimraf'); //\rimraf 包的作用：以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除

// 定义entryBuild
const entryBuildPath = path.resolve(__dirname, '../../entryBuild');
// 删除entryBuild
rimraf.sync(entryBuildPath);
// 创建entryBuild
fs.mkdirSync(entryBuildPath);
const entryContent = data => `
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../app/component/${data.path}';
import Header from '../app/component/common/Header';
import Footer from '../app/component/common/Footer';
ReactDOM.render([<Header key='Header'/>, <Index key='Index'/>, <Footer key='Footer'/>], document.getElementById('app'));
`;
// 生成webpack entry 入口文件
console.log(entryContent(entry[0]))
entry.map(data => {
  fs.writeFile(entryBuildPath + '/' + data.name + '.js', entryContent(data), 'utf8', function (err) {
    if(err){
      return console.log(err);
    }
  })
})
