import PropTypes from "prop-types";
import styles from "./expansion-icon.module.css";

const ExpansionIcon = ({ className = "" }) => {
  return (
    <section className={[styles.expansionIcon, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.wrapper}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/15@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.browseJobsWrapper}>
                    <div className={styles.browseJobs}>{`Browse Jobs `}</div>
                  </div>
                  <div className={styles.discoverAWideRangeOfProjeParent}>
                    <div className={styles.discoverAWide}>
                      {" "}
                      Discover a wide range of projects offered by startups,
                      companies, and organizations across various industries and
                      domains.
                    </div>
                    <div className={styles.frameWrapper1}>
                      <button className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.explore}>Explore</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.container}>
                <img
                  className={styles.icon1}
                  loading="lazy"
                  alt=""
                  src="/13@2x.png"
                />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.browseInternshipWrapper}>
                    <div className={styles.browseInternship}>
                      Browse Internship
                    </div>
                  </div>
                  <div className={styles.discoverFreelancingOpportuni}>
                    Discover Freelancing opportunities offered by startups,
                    SMEs, corporations, and other organizations seeking to
                    recruit talented and ambitious individuals.
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <button className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.explore1}>Explore</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.keyBenefitsForStudentsWrapper}>
            <div className={styles.keyBenefitsFor}>
              Key benefits for students?
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper3}>
          <div className={styles.frameParent5}>
            <div className={styles.benefitIconWrapper}>
              <img
                className={styles.benefitIcon}
                loading="lazy"
                alt=""
                src="/14@2x.png"
              />
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent7}>
                <div className={styles.freelancingProjectsWrapper}>
                  <div className={styles.freelancingProjects}>
                    Freelancing Projects
                  </div>
                </div>
                <div className={styles.discoverInternshipOpportunit}>
                  Discover internship opportunities offered by startups, SMEs,
                  corporations, and other organizations seeking to recruit
                  talented and ambitious individuals.
                </div>
              </div>
              <div className={styles.frameWrapper4}>
                <button className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.explore2}>Explore</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ExpansionIcon.propTypes = {
  className: PropTypes.string,
};

export default ExpansionIcon;
