//author caozhongyu
//date 2019-11-07
//公用 （不允许添加任何信息,修改找曹忠宇）
import {configure} from 'mobx';
import commonStore from './common/index';
import store from "./module/index";
//引用store组件

configure ({
  enforceActions: 'always', // 严格模式
});

const stores = {
  ...commonStore,
  ...store,
};

export default stores;
