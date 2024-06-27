import SessionIcon from "./session-icon";
import TimeSlots from "./time-slots";
import TimeSlots1 from "./time-slots1";
import PropTypes from "prop-types";
import styles from "./session-duration.module.css";

const SessionDuration = ({ className = "" }) => {
  return (
    <div className={[styles.sessionDuration, className].join(" ")}>
      <div className={styles.sessionDurationContainer}>
        <div className={styles.durationOptions}>
          <div className={styles.durationList}>
            <SessionIcon min="30 min" />
            <TimeSlots />
            <TimeSlots1 />
            <TimeSlots />
            <div className={styles.timeSlots}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.am}>7:00-8:00 AM</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.am1}>7:00-8:00 AM</div>
              </div>
            </div>
            <TimeSlots1 />
          </div>
        </div>
        <div className={styles.hourlyDuration}>
          <div className={styles.separator} />
          <div className={styles.hourOption}>
            <div className={styles.hourLabel}>
              <SessionIcon min="01 hour" />
              <button className={styles.hourValues}>
                <div className={styles.hourValuesChild} />
                <div className={styles.am2}>7:00-8:00 AM</div>
              </button>
              <div className={styles.pMHours}>
                <div className={styles.pMLabel}>
                  <div className={styles.pMLabelChild} />
                  <div className={styles.pm}>10:00-11:00 PM</div>
                </div>
              </div>
              <div className={styles.hourValues1}>
                <div className={styles.hourValuesItem} />
                <div className={styles.am3}>7:00-8:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SessionDuration.propTypes = {
  className: PropTypes.string,
};

export default SessionDuration;
