import React from 'react'
import styles from './index.less';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Index extends React.Component{

  render () {
    console.log(this.props.stores)
    return (
      <div className={styles.index}>
        list:{this.props.stores.home.name}
        <ul>

        </ul>
      </div>
    )
  }
}
export default Index
// export default inject(({ stores }) => ({
//   name: stores.home.name,
//   stores: stores
// }))(observer(Index));
