import { observable } from 'mobx';

class CommonBase {
  @observable list = [
    {
      id: '1',
      name: 'jack'
    },
    {
      id: '2',
      name: 'tom'
    },
  ]
}

export default new CommonBase();
