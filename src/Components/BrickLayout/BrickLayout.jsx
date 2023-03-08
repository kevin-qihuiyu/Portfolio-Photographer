import styles from "./BrickLayout.module.css"

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src="img/photo/1.jpg" alt="" />
        <img src="img/photo/2.jpg" alt="" />
        <img src="img/photo/3.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/photo/4.jpg" alt="" />
        <img src="img/photo/5.jpg" alt="" />
        <img src="img/photo/6.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/photo/7.jpg" alt="" />
        <img src="img/photo/8.jpg" alt="" />
        <img src="img/photo/9.jpg" alt="" />
      </div>
    </div>
  )
}

export default BrickLayout