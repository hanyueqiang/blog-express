## 安装express
```
npm install express-generator -g

express blog-express

cd blog-express
```

## 安装express依赖
```
npm install
```

## 安装cross-env nodemon 开发环境实现热更新
```
npm install cross-env nodemon -D

## 安装mysql xss

npm i mysql xss -S
```

## 安装express-session 
```
npm i express-session -S
```

## 安装redis connect-redis插件
```
npm i redis connect-redis -S
```

## 下载安装pm2做进程守护
```
npm install pm2 -g

pm2 --version

pm2 list appName/id
pm2 start appName/id // 启动
pm2 restart appName/id // 手动重启 
pm2 stop appName/id //停止
pm2 info appName/id //查看服务信息
pm2 log appName/id //日志
pm2 delete appName/id //删除进程
pm2 monit appName/id //查看当前内存信息 日志
```

## 配置pm2 json文件

```
pm2.conf.json //文件

{
  "apps": {
    "name": "pm2-han-server",
    "script": "app.js", // "bin/www.js"
    "watch": true, //监听文件重启
    "ignore_watch": {
      "node_modules",
      "logs"
    },
    "instances": 4, //多进程
    "error_file": "logs/err.log", //输出错误日志
    "out_file": "logs/out.log", //输出日志
    "log_date_format": "YYYY-MM-DD HH:mm:ss"
  }
}

```
## package.json配置文件
```
"prd": "cross-env NODE_ENV=production pm2 start pm2.conf.json"
```

## pm2核心价值
进程守护
支持多进程
日志线上记录
支持负载均衡

多进程无法共享session
可以使用redis共享session



