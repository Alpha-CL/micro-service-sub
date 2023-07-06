import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import qiankun from './qiankun';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
  layout: false,
  npmClient: 'yarn',
  routes,
  proxy,
  qiankun,
  mountElementId: 'micro-app-chat',  //  容器ID
  base: '/',  //  umi微应用独立访问需要配置这个参数, 否则默认获取 package.name 作为 base
  // publicPath: `/${packageName}/`,
  // outputPath: `./dist/${packageName}`,
  // hash: true,
});
