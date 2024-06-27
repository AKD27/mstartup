import PropTypes from "prop-types";
import styles from "./component.module.css";

const Component = ({ className = "", circle, divider }) => {
  return (
    <div className={[styles.component113, className].join(" ")}>
      <div className={styles.component113Child} />
      <img className={styles.icon} loading="lazy" alt="" src="/vector.svg" />
      <img className={styles.circleIcon} loading="lazy" alt="" src={circle} />
      <div className={styles.circle} />
      <div className={styles.containerParent}>
        <header className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.offerBox}>
                <input className={styles.offerBackground} type="text" />
              </div>
              <div className={styles.offerTitle}>
                <a className={styles.offersDeals}>{`Offers & Deals`}</a>
              </div>
              <div className={styles.offerDetails}>
                <div className={styles.detailsWrapper}>
                  <div className={styles.detailsContent}>
                    <img
                      className={styles.detailsContentChild}
                      loading="lazy"
                      alt=""
                      src="/group-21.svg"
                    />
                  </div>
                  <a className={styles.a}>10</a>
                </div>
                <div className={styles.detailsRow}>
                  <div className={styles.rowWrapper}>
                    <div className={styles.rowContent}>
                      <img
                        className={styles.rowIcon}
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <a className={styles.a1}>15</a>
                  </div>
                </div>
                <div className={styles.detailsRow1}>
                  <div className={styles.rowWrapper1}>
                    <div className={styles.rowContent1}>
                      <img
                        className={styles.rowIcon1}
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
          <div className={styles.separator} />
        </header>
        <div className={styles.navigation}>
          <div className={styles.navItems}>
            <div className={styles.navItem}>
              <div className={styles.navLink}>
                <h2 className={styles.launchpad}>LaunchPad</h2>
              </div>
              <div className={styles.divider} />
            </div>
            <div className={styles.navItem1}>
              <div className={styles.navLink1}>
                <h2 className={styles.learning}>Learning</h2>
              </div>
              <div className={styles.divider1} />
            </div>
            <div className={styles.navItem2}>
              <div className={styles.navLink2}>
                <h2 className={styles.networking}>Networking</h2>
                <div className={styles.divider2} />
              </div>
              <div className={styles.navItem3}>
                <div className={styles.navLink3}>
                  <div className={styles.projectLink}>
                    <h2 className={styles.projects}>Projects</h2>
                  </div>
                  <img className={styles.dividerIcon} alt="" src={divider} />
                </div>
                <div className={styles.navItem4}>
                  <h2 className={styles.jobs}>Jobs</h2>
                  <div className={styles.divider3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  circle: PropTypes.string,
  divider: PropTypes.string,
};

export default Component;
