import PropTypes from "prop-types";
import styles from "./live-status.module.css";

const LiveStatus = ({ className = "" }) => {
  return (
    <section className={[styles.liveStatus, className].join(" ")}>
      <div className={styles.liveStatusChild} />
      <div className={styles.jobLive}>
        <div className={styles.jobLiveInner}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/152@2x.png"
          />
        </div>
        <h1 className={styles.jobIsLive}>Job is LIve</h1>
      </div>
      <div className={styles.jobPostingLive}>
        <h3 className={styles.yourJobPosting}>Your Job Posting is Live!</h3>
      </div>
    </section>
  );
};

LiveStatus.propTypes = {
  className: PropTypes.string,
};

export default LiveStatus;
