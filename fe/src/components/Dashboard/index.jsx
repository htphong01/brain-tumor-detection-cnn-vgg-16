import LineChart from "./LineChart";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import styles from "./styles.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles["chart-container"]}>
        <div className={styles["chart-section"]}>
          <AreaChart />
        </div>
        <div className={styles["chart-section"]}>
          <BarChart />
        </div>
      </div>
      <div className={styles["full-width"]}>
        <LineChart />
      </div>
    </div>
  );
}
