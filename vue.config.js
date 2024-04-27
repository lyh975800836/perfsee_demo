const { defineConfig } = require('@vue/cli-service')
const { PerfseePlugin } = require('@perfsee/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
        // ...
        new PerfseePlugin({
          /**
           * Perfsee 平台对应的项目 ID。
           *
           * **如果想要上传打包产物到平台进行分析，则该选项必填。**
           */
          project: 'perfsee_demo',
    
          /**
           * 给打包的产物指定一个项目内唯一的名字。
           *
           * 在一次提交（单个 CI 工作流）中，如果有会构建多次，即有多个打包产物时会很有用。
           *
           * 因为我们和基准的对比是基于 `Entrypoint`，如果多次构建产生的打包产物的 `Entrypoint` 名字相同，我们无法确定哪个是正确的用来被对比的基准。
           *
           * 例如：`landing/main` 和 `customers/main` 很直接的告诉我们两份产物的区别，后续我们也可以用相同名字的产物进行对比。
           *
           * @default 'main'
           */
          artifactName: 'main',
        })
    ]
  }
})
