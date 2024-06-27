import PropTypes from "prop-types";
import styles from "./frame-component6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/111@2x.png"
            />
          </div>
          <div className={styles.frameItem} />
          <div className={styles.frameContainer}>
            <div className={styles.monitorApplicationsParent}>
              <div className={styles.monitorApplications}>
                Monitor Applications
              </div>
              <div className={styles.logIntoYour}>
                Log into your Bigstartups account to monitor applications and
                manage your job listings
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.engageCandidates}>
        <div className={styles.engageWithPotential}>
          Engage with potential candidates directly through the platform to find
          the perfect fit for your team.
        </div>
        <div className={styles.considerBoostingYour}>
          Consider boosting your job listing to reach even more candidates
        </div>
        <div className={styles.communicateWithCandidates}>
          Communicate with Candidates
        </div>
        <div className={styles.boostYourListing}>Boost Your Listing</div>
        <img className={styles.icon1} loading="lazy" alt="" src="/408@2x.png" />
        <div className={styles.boostListing} />
        <div className={styles.boostListing1} />
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
