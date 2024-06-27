import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.workWithStartupsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <FrameComponent
          firstBenefitIcon="/1@2x.png"
          careerAdvancement="Career Advancement"
          positionYourselfForCareer=" Position yourself for career advancement by gaining practical experience, expanding your professional network, and building a solid reputation within the startup community"
        />
        <div className={styles.globalContent}>
          <div className={styles.frameGroup}>
            <div className={styles.secondBenefitIconWrapper}>
              <img
                className={styles.secondBenefitIcon}
                alt=""
                src="/14-1@2x.png"
              />
            </div>
            <div className={styles.careerDetailsParent}>
              <div className={styles.careerDetails}>
                <div className={styles.portfolioBuilding}>
                  Portfolio Building
                </div>
              </div>
              <div className={styles.buildAStrong}>
                Build a strong portfolio of projects and experiences that
                showcase your skills and accomplishments to potential employers
                or clients.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
