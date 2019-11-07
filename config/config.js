import path from 'path'
import pageRoutes from './router.config'
import configProject from './config.project'

console.log('>>> Info from config/config.js')
console.log(process.env.SERVER)

export default {
  // Umi plugins;
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
      },
    ],
  ],
  targets: {
    ie: 9,
  },
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
    'process.env.SERVER': process.env.SERVER,
    'process.env.FEX_BUILD_BRANCH': process.env.FEX_BUILD_BRANCH,
    'process.env.FEX_BUILD_COMMIT_ID': process.env.FEX_BUILD_COMMIT_ID,
    'process.env.ENABLE_FILE_SERVICE': process.env.ENABLE_FILE_SERVICE,
  },
  // The configuration of the front-end router;
  routes: pageRoutes,
  // The mode of front-end router;
  history: 'hash',
  // Use the MD5 of static files as their fingerprints, which are hash;
  hash: true,
  // Theme for antd
  // Reference: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // 'primary-color': defaultSettings.primaryColor,
  },
  // TODO: ?
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName
      }
      const match = context.resourcePath.match(/src(.*)/)
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '').replace('.css', '')
        const arr = antdProPath
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase())
        return `dip${arr.join('-')}-${localName}`.replace(/--/g, '-')
      }
      return localName
    },
  },
  // chainWebpack: webpackplugin,
  cssnano: {
    mergeRules: false,
  },
  publicPath: configProject.publicPath,
  outputPath: configProject.deployedFolder,
  // proxy: 配置前端开发时，“本地”请求代理到“后端开发服务器”；
  proxy: {
    '/transerver': {
      target: 'http://fex.dip-aidev.com',
      changeOrigin: true,
    },
  },
  alias: {
    '@SRC': path.resolve(__dirname, '../src'),
  },
}
