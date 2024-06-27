import PropTypes from "prop-types";
import styles from "./frame-component5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.workWithStartupsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.modelsParent}>
            <div className={styles.models}>
              <div className={styles.buildingRelationshipsWith}>
                Building relationships with individuals from different
                backgrounds and cultures not only enriches the startup's
                internal culture but also provides valuable insights and
                connections that can facilitate international growth and market
                penetration.
              </div>
            </div>
            <div className={styles.frameChild} />
          </div>
        </div>
        <img
          className={styles.barriersIcon}
          loading="lazy"
          alt=""
          src="/7@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
