import { observable } from 'mobx';

class Index {
  @observable list = [
    {
      id: '0',
      name: 'jack'
    },
    {
      id: '1',
      name: 'tom'
    },
  ]
}

export default new Index();
