```bash
npm install typescript webpack webpack-cli webpack-dev-server ts-loader cross-env webpack-merge clean-webpack-plugin html-webpack-plugin -D

npm install react @types/react react-dom @types/react-dom -S

npm install redux react-redux @types/react-redux redux-logger redux-promise redux-thunk @types/redux-logger @types/redux-promise -D

 npm install react-router-dom @types/react-router-dom connected-react-router antd -S
```

## 1、ts编译

1. ts-loader 编译时可以类型检查
2. babel-loader @babel/parset-typescript 编译时不能类型检查

## 单元测试

> 安装、配置
```
npm install @types/jest ts-jest -D
npx ts-jest config:init
```
