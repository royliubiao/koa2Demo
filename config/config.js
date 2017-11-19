'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new Map();

//端口
//引用path路径
config.set('port', 3000);
//引用静态资源文件路径
config.set('staticDir', _path2.default.join(__dirname, '..', 'public'));
//引用html模板文件路径
config.set('viewDir', _path2.default.join(__dirname, '..', 'views'));

exports.default = config;
