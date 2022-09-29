import styles from "./FilterSwitch.module.scss";

export const FilterSwitch = () => {
  return (
    <div className={styles.filterSwitch}>
      <h3>:הצג פעולות</h3>
      <div className={styles.buttonGroup}>
        <button className={styles.buttonSecond}>הכל</button>
        <button className={styles.buttonSecond}>חיוב</button>
        <button className={styles.buttonPrimary}>זיכוי</button>
      </div>
    </div>
  );
};
