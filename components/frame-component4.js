import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.workWithStartupsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.advancementTitleParent}>
          <div className={styles.advancementTitle}>
            <img
              className={styles.thirdBenefitIcon}
              loading="lazy"
              alt=""
              src="/2@2x.png"
            />
          </div>
          <div className={styles.xposureToCuttingEdgeTechnoParent}>
            <div className={styles.xposureToCuttingEdge}>
              xposure to Cutting-Edge Technologies
            </div>
            <div className={styles.flexibilityItem}>
              <div className={styles.workOnProjects}>
                Work on projects that leverage the latest technologies and
                trends, giving you hands-on experience with tools and platforms
                shaping the future of business.
              </div>
            </div>
          </div>
        </div>
        <FrameComponent
          firstBenefitIcon="/29@2x.png"
          careerAdvancement="Networking Opportunities"
          positionYourselfForCareer=" Connect with like-minded students and professionals passionate about innovation and entrepreneurship. Build lasting relationships that can open doors to future collaborations and opportunities."
          propFlex="unset"
          propMinWidth="453px"
          propWidth="453px"
        />
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
