'use strict';
const path = require('path');

module.exports = (appInfo) => {
  return {
    // 插件路径
    admin_root_path: '/static',
    // 数据库连接
    sqlPath: {
      bin: '',
      backup: '/home/database/doracms-sql/',
    },
    sequelize: {
      dialect: 'mariadb',
      host: '127.0.0.1',
      port: 3306,
      database: 'doracms', // mysql database dir
      username: 'root',
      password: 'Shl1018a..',
      delegate: 'model',
    },
    // 静态目录
    static: {
      prefix: '/static',
      dir: [
        path.join(appInfo.baseDir, 'app/public'),
        path.join(appInfo.baseDir, 'backstage/dist'),
        '/home/doraData/uploadFiles/static',
      ],
      maxAge: 31536000,
    },
    // 日志路径
    logger: {
      dir: '/home/doraData/logsdir/doracms-sql',
    },
    // 服务地址配置
    server_path: 'http://cuiby.top',
  };
};
