import PropTypes from "prop-types";
import styles from "./time-slots1.module.css";

const TimeSlots1 = ({ className = "" }) => {
  return (
    <div className={[styles.timeSlots, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.am}>7:00-8:00 AM</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.am1}>7:00-8:00 AM</div>
      </div>
    </div>
  );
};

TimeSlots1.propTypes = {
  className: PropTypes.string,
};

export default TimeSlots1;
