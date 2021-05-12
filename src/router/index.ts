import { createRouter, createWebHashHistory } from 'vue-router';

// import App from '../App.vue';
import Home from '../pages/home.vue';
import GreenHouse from '../pages/green-house/index.vue';
import Agriculture from '../pages/agriculture/index.vue';
import Device from '../pages/device-manage/index.vue';
const routes = [
  // {
  //   path: '/',
  //   component: Home,
  //   meta: {
  //     index: 0,
  //   },
  //   children: [
  //     {
  //       path: '/green-house',
  //       component: GreenHouse,
  //     },
  //     {
  //       path: '/agriculture-manage',
  //       component: Agriculture,
  //     },
  //     {
  //       path: '/device-manage',
  //       component: Device,
  //     },
  //   ],
  // },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录界面'
    }
  },
  {
    path: '/login',
    redirect: '/'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '酷屏首页统计图'
    }
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('../views/Brand.vue'),
    meta: {
      title: '公司品牌介绍'
    }
  }
  // {
  //   path: '/project',
  //   component: Project,
  //   // redirect: '/test-evaluation',
  //   meta: {
  //     index: 0,
  //   },
  //   // name: '测试评估',
  //   children: [
  //     {
  //       path: 'experiment-run',
  //       component: ExperimentRun,
  //       // redirect: '/TestEvaluation',
  //     },
  //     {
  //       path: 'environment-config',
  //       component: Diagram,
  //     },
  //   ],
  // },
];
// const routes = [
//   {
//     path: '/',
//     component: home,
//     redirect: '/TestEvaluation'
//   },
//   {
//     path: '/TestEvaluation',
//     component: index,
//     children: [
//       {
//         path: 'DataManage',
//         component: DataManage
//       },
//       {
//         path: 'ModelTest',
//         components: {
//           default: ModelTest,
//           helper: modeltest2
//         }
//       }
//     ]
//   }
// ];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  //采用hash模式
  // hash: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
