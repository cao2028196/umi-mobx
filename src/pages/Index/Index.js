import React from 'react'
import styles from './index.less';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Index extends React.Component{

  render () {
    console.log(this.props.stores)
    const {base} = this.props.stores
    return (
      <div className={styles.index}>
        list:{this.props.stores.home.name}
        <div>
          {this.props.stores.base.count}
          <input type="button" value="加1" onClick={()=> base.addCount()} />
          <input type="button" value="变为10" onClick={()=> base.bigger()} />
        </div>
      </div>
    )
  }
}
export default Index
// export default inject(({ stores }) => ({
//   name: stores.home.name,
//   stores: stores
// }))(observer(Index));
