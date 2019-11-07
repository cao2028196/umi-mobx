export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    /**
     * 权限配置
     */
    // Routes: ['src/pages/Authorized'],
    // authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/index' },
      // forms
      {
        path: '/index',
        icon: '',
        name: 'index',
        routes: [
          {
            path: '/index',
            name: 'myTasts.firstView',
            component: './index',
          },
        ]
      }
    ]
  }
]
