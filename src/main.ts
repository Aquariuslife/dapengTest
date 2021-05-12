import { createApp } from 'vue';
import router from './router/index';
// import VueRouter from 'vue-router';
import store from './store';
import App from './App.vue';
import 'element-plus/lib/theme-chalk/index.css';

import ElementPlus from 'element-plus';

import SvgIconVue from './components/SvgIcon.vue';
import ImageIconVue from './components/ImageIcon.vue';
// import EmptyVue from './components/Empty.vue';
// import UserVue from './components/User.vue';

import vueParticles from 'vue-particles'
// import Vcomp from './components/index'
import Toast from './components/toast/index.vue'

import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'

// const modules = import.meta.globEager('./*.js');

// export { modules };
const app = createApp(App);
app.component('SvgIcon', SvgIconVue);
app.component('ImageIcon', ImageIconVue);
app.component('Toast', Toast);
// app.component('Empty', EmptyVue);
// app.component('User', UserVue);
app.use(router);
app.use(store);
// //按需加载组件
app.use(ElementPlus, {});
app.use(vueParticles);
// app.use(Vcomp);
app.mount('#app');
