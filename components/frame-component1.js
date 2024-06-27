import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.component113Wrapper, className].join(" ")}>
      <div className={styles.component113}>
        <div className={styles.component113Child} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.component113Item}
          loading="lazy"
          alt=""
          src="/ellipse-39@2x.png"
        />
        <div className={styles.component113Inner} />
        <div className={styles.frameParent}>
          <header className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleWrapper}>
                  <input className={styles.frameChild} type="text" />
                </div>
                <div className={styles.offersDealsWrapper}>
                  <a className={styles.offersDeals}>{`Offers & Deals`}</a>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameWrapper1}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-21.svg"
                      />
                    </div>
                    <a className={styles.a}>10</a>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameParent2}>
                      <div className={styles.vectorWrapper}>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                      <a className={styles.a1}>15</a>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.frameParent3}>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <a className={styles.a2}>89</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameInner} />
          </header>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.launchpadWrapper}>
                  <div className={styles.launchpad}>LaunchPad</div>
                </div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.learningWrapper}>
                  <div className={styles.learning}>Learning</div>
                </div>
                <div className={styles.frameChild1} />
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.networkingParent}>
                  <div className={styles.networking}>Networking</div>
                  <div className={styles.frameChild2} />
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.frameParent9}>
                    <div className={styles.projectsWrapper}>
                      <div className={styles.projects}>Projects</div>
                    </div>
                    <img className={styles.lineIcon} alt="" />
                  </div>
                  <div className={styles.jobsParent}>
                    <div className={styles.jobs}>Jobs</div>
                    <div className={styles.frameChild3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
