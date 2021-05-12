/*
 * 描述: 封装组件库
 * 作者: Jack Chen
 * 日期: 2020-04-18
 */

import bgAnimation from './bgAnimation/index.vue' // 登录界面背景图动画
import modal from './modal/index.vue' // 自定义全局模态框
import sinan from './sinan/index.vue' // 司南排名图
import seamless from './seamless/index.vue' // 新闻无缝滚动
import pyramid from './pyramid/index.vue' // 金字塔动画
import scrollArc from './scrollArc/index.vue' // 滚动弧形线
import szBar from './szBar/index.vue' // 双轴柱状图
import ringPin from './ringPin/index.vue' // 环形气泡图
import rotateColorful from './rotateColorful/index.vue' // 旋转多彩图
import circleRunway from './circleRunway/index.vue' // 环形跑道图
import scanRadius from './scanRadius/index.vue' // 扫描半径图
import cakeLinkage from './cakeLinkage/index.vue' // 柱饼组合联动
import dynamicLine from './dynamicLine/index.vue' // 动态轮播折线图
import pyramidTrend from './pyramidTrend/index.vue' // 金字塔趋势
import staffMix from './staffMix/index.vue' // 人员占比
import flashCloud from './flashCloud/index.vue' // 闪动云
import ringPie from './ringPie/index.vue' // 环形饼图
import colorfulRadar from './colorfulRadar/index.vue' // 多彩雷达
import dynamicList from './dynamicList/index.vue' // 动态列表动画
import bar3d from './bar3d/index.vue' // 3D立体柱状图
import colorfulArea from './colorfulArea/index.vue' // 多彩轮播面积
import rainbow from './rainbow/index.vue' // 彩虹轨道图
import gauge from './gauge/index.vue' // 仪表盘
import waterPolo from './waterPolo/index.vue' // 水球图
import circleNesting from './circleNesting/index.vue' // 圆环套圆环

import business from './companySummary/business.vue' // 业务范围
import talent from './companySummary/talent.vue' // 人才队伍
import income from './companySummary/income.vue' // 营业收入
import wordCloud from './companySummary/wordCloud.vue' // 产品热词
import distribution from './companySummary/distribution.vue' // 客户分布
import history from './companySummary/history.vue' // 发展历程

const components = {
  bgAnimation,
  modal,
  sinan,
  seamless,
  pyramid,
  scrollArc,
  szBar,
  ringPin,
  rotateColorful,
  circleRunway,
  scanRadius,
  cakeLinkage,
  dynamicLine,
  pyramidTrend,
  staffMix,
  flashCloud,
  ringPie,
  colorfulRadar,
  dynamicList,
  bar3d,
  colorfulArea,
  rainbow,
  gauge,
  waterPolo,
  circleNesting,

  business,
  talent,
  income,
  wordCloud,
  distribution,
  history,
  
};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

const Vcomp = {
  ...components,
  install
};


export default Vcomp
