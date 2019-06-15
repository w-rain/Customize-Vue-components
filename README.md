<h1 align="center">Customize-Vue-components</h1>

<div align="left">
Custom base components based on Vue2, 本项目是个人在学习vue2的过程中，整理参考自定义基础vue组件的例子，包含Toast、Alert、Confirm、Loading等公共基础组件，后续会不断更新个人学习和练手的自定义组件。
</div>

## 用法

打开终端，依次执行以下命令：

    git clone https://github.com/w-rain/Customize-Vue-components.git
    cd Customize-Vue-components
    npm config set registry https://registry.npm.taobao.org
    npm i

    dev-mode:
    npm run dev 

    prod-mode:
    npm run build
    cd dist 
    npm install express
    node server 


打开浏览器，访问http://localhost:3000/

## 项目结构

```
 --dist
    server.js               //express启动文件
 --node_modules             //npm包管理器
 --public                   //公共文件和资源
    favicon.ico             //网页tab页标识
    index.html              //静态文件入口index.html
 --src  
   --assets                 //静态资源
     logo.png               //vue的logo
   --components             //组件
      --messageBox          //ms基础组件包
        --Alert
        --directives
        --ios
        --Loading
        --mixins
        --Toast
        --utils
        index.js
        transition.css
      --Toast               //Toast单独调用组件
        index.js
        toast.vue
      HelloWorld.vue
    App.vue

 .gitignore                 //git忽略上传文件
 package.json               //项目配置与依赖文件
 README.md // 说明文档
```

## 主要依赖
    Vue
    Vue-cli
    express
    lodash
    babel
    lodash
    vue-template-compiler
    less-loader

## 组件列表

    Toast
    Alert
    Confirm
    Loading


## 开源许可证

MIT
