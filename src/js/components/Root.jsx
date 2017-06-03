import React from 'react';
import MyBox from './MyBox';
import styles from './Style.css';

const Root = () => (
  <div className={styles.container}>
    <div className={styles.box1}>
      <MyBox title="Box 1" />
    </div>
    <br />
    <div className={styles.box2}>
      <MyBox title="Box 2" />
    </div>
    <br />
    <div className={styles.box3}>
      <MyBox title="Box 3" />
    </div>
    <br />
    <div className={styles.box1}>
      <MyBox title="Box 1 with Children">
        <br />
        <div>
          <MyBox title="Child 1 no style (inherit parent)" />
        </div>
        <br />
        <div className={styles.box2} >
          <MyBox title="Child 2 with Box 2 style and Children">
            <br />
            <div className={styles.box3}>
              <MyBox title="Grand Child 1 with Box 3 style" />
            </div>
          </MyBox>
        </div>

      </MyBox>
    </div>
  </div>
);

export default Root;
