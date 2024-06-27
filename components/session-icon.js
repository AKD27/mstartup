import PropTypes from "prop-types";
import styles from "./session-icon.module.css";

const SessionIcon = ({ className = "", min }) => {
  return (
    <div className={[styles.sessionIcon, className].join(" ")}>
      <div className={styles.iconContainer}>
        <img
          className={styles.letsIconstimeLight}
          alt=""
          src="/letsiconstimelight-1.svg"
        />
        <div className={styles.minutesLabel}>
          <div className={styles.min}>{min}</div>
        </div>
      </div>
    </div>
  );
};

SessionIcon.propTypes = {
  className: PropTypes.string,
  min: PropTypes.string,
};

export default SessionIcon;
