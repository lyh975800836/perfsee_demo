const { defineConfig } = require('@vue/cli-service')
const { PerfseePlugin } = require('@perfsee/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
        // ...
        new PerfseePlugin({
          project: 'perfsee_demo',
          platform: 'http://localhost:8080'
        //   enableAudit: true,
        })
    ]
  }
})
