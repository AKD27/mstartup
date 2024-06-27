import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.workWithStartupsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.workWithStartupsWrapper}>
                <h3 className={styles.workWithStartups}>WORK WITH STARTUPS</h3>
              </div>
              <div className={styles.wereDedicatedTo}>
                we're dedicated to bridging the gap between aspiring students
                and innovative startups, creating opportunities that know no
                boundaries
              </div>
            </div>
            <div className={styles.frameDiv}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.button}>Button</div>
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.untitledDesign13}
          loading="lazy"
          alt=""
          src="/untitled-design-1-3@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
