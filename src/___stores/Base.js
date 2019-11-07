import { observable } from 'mobx';

class Base {
  @observable list = [
    {
      id: '000000',
      name: '其他'
    },
    {
      id: '010000',
      name: '刑事案件'
    },
  ]
}

export default new Base();
