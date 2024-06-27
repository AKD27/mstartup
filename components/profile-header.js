import PropTypes from "prop-types";
import styles from "./profile-header.module.css";

const ProfileHeader = ({ className = "" }) => {
  return (
    <div className={[styles.profileHeader, className].join(" ")}>
      <div className={styles.headerDetails}>
        <div className={styles.nameAndSkills}>
          <div className={styles.nameWrapper}>
            <img
              className={styles.profilePictureIcon}
              loading="lazy"
              alt=""
              src="/ellipse-60@2x.png"
            />
            <div className={styles.skillLabel}>
              <h3 className={styles.skills}>Skills</h3>
            </div>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.consultantDetails}>
            <h3 className={styles.ridhimaSen}>Ridhima Sen</h3>
            <div className={styles.designation}>
              <div className={styles.consultingLeader}>Consulting Leader</div>
            </div>
          </div>
          <div className={styles.experience}>
            <div className={styles.experienceWrapper}>
              <div className={styles.experienceDetails}>
                <img
                  className={styles.grommetIconsuserExpert}
                  alt=""
                  src="/grommeticonsuserexpert.svg"
                />
                <div className={styles.yearsOfExperience}>
                  <div className={styles.experienceBadge}>
                    <img
                      className={styles.fluentMdl2calendarYearIcon}
                      alt=""
                      src="/fluentmdl2calendaryear.svg"
                    />
                    <img
                      className={styles.fluentpayment20RegularIcon}
                      alt=""
                      src="/fluentpayment20regular.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.consultationFee}>
              <div className={styles.qualifiedInStartup}>
                Qualified in startup Consulting
              </div>
              <div className={styles.feeDetails}>
                <div className={styles.yearsOfExperience1}>
                  20 Years of experience in consulting
                </div>
              </div>
              <div className={styles.feeDetails1}>
                <div className={styles.consultationFee1000}>
                  Consultation fee ₹1000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  className: PropTypes.string,
};

export default ProfileHeader;
