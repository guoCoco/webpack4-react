let titleFun = function (chunkName, title) {
  let titleDef = '我的网站';
  if (chunkName.indexOf('index')) {
    return titleDef;
  } else {
    return title + '_' + titleDef;
  }
};

module.exports = {
  titleFun: titleFun
}
