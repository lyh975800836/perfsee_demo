const { defineConfig } = require('@vue/cli-service')
const { PerfseePlugin } = require('@perfsee/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
        // ...
        new PerfseePlugin({
          project: 'perfsee-demo',
          platform: 'http://127.0.0.1:3000'
        //   enableAudit: true,
        })
    ]
  }
})
