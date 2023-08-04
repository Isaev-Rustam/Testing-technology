import styles from './grid.module.css';

const Grid = () => (
  <div style={{ height: '100%' }}>
    <div className={styles.grid} style={{ marginBottom: '20px' }}>
      <div className={`${styles['grid-item']} ${styles['grid-item-1']}`}>1</div>
      <div className={`${styles['grid-item']} ${styles['grid-item-2']}`}>2</div>
      <div className={`${styles['grid-item']} ${styles['grid-item-3']}`}>
        <iframe
          className="w-full h-full p-4"
          src="https://www.youtube.com/embed/jNQXAC9IVRw"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className={`${styles['grid-item']} ${styles['grid-item-4']}`}>4</div>
    </div>
    <div className={styles['grid-2']}>
      <div className={`${styles['grid-item']} ${styles['grid-item-1']}`}>
        <span>1</span>
      </div>
      <div className={`${styles['grid-item']} ${styles['grid-item-2']}`}>
        <span className={`${styles['grid-body']}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ea et
          ipsa tempore totam voluptatum. Ab aliquid beatae cum delectus deserunt
          dolorem eaque eos est expedita hic, impedit, inventore itaque minus
          nesciunt numquam praesentium quae quibusdam suscipit ut veritatis!
          <div className={`${styles.sticky}`}>sticky</div>
          corporis cum debitis dicta, dignissimos ducimus eligendi expedita
          explicabo fuga illo illum labore laboriosam libero modi molestiae
          molestias nesciunt non optio quae quaerat quidem quis quo recusandae
          sit tempora tenetur velit voluptas voluptates. corporis cum debitis
          dicta, dignissimos ducimus eligendi expedita explicabo fuga illo illum
          labore laboriosam libero modi molestiae molestias nesciunt non optio
          quae quaerat quidem quis quo recusandae sit tempora tenetur velit
          voluptas voluptates. corporis cum debitis dicta, dignissimos ducimus
          eligendi expedita explicabo fuga illo illum labore laboriosam libero
          modi molestiae molestias nesciunt non optio quae quaerat quidem quis
          quo recusandae sit tempora tenetur velit voluptas voluptates. corporis
          cum debitis dicta, dignissimos ducimus eligendi expedita explicabo
          fuga illo illum labore laboriosam libero modi molestiae molestias
          nesciunt non optio quae quaerat quidem quis quo recusandae sit tempora
          tenetur velit voluptas voluptates.
        </span>
      </div>
      <div className={`${styles['grid-item']} ${styles['grid-item-3']}`}>
        <span>3</span>
      </div>
      <div className={`${styles['grid-item']} ${styles['grid-item-4']}`}>
        <span>4</span>
      </div>
    </div>
    <div className={styles.animate} />
    <div
      className="w-80 h-20 bg-slate-700"
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="bg-orange-400 inline-block">div</div>
    </div>
  </div>
);

export default Grid;
