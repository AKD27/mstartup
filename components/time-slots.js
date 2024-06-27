import PropTypes from "prop-types";
import styles from "./time-slots.module.css";

const TimeSlots = ({ className = "" }) => {
  return (
    <div className={[styles.timeSlots, className].join(" ")}>
      <button className={styles.morningSlots}>
        <div className={styles.morningSlotsChild} />
        <div className={styles.am}>7:00-8:00 AM</div>
      </button>
      <button className={styles.afternoonSlots}>
        <div className={styles.afternoonSlotsChild} />
        <div className={styles.am1}>7:00-8:00 AM</div>
      </button>
    </div>
  );
};

TimeSlots.propTypes = {
  className: PropTypes.string,
};

export default TimeSlots;
