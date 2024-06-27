import PropTypes from "prop-types";
import styles from "./networking-description.module.css";

const NetworkingDescription = ({ className = "" }) => {
  return (
    <section className={[styles.networkingDescription, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.technologyDescriptionParent}>
          <div className={styles.technologyDescription}>
            <img
              className={styles.postIcon}
              loading="lazy"
              alt=""
              src="/5@2x.png"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.postProjects}>Post Projects</div>
              </button>
            </div>
            <div className={styles.portfolioItemParent}>
              <div className={styles.portfolioItem}>
                <div className={styles.postFreelancingProjects}>
                  Post Freelancing Projects
                </div>
              </div>
              <div className={styles.weProvideFlexible}>
                {" "}
                We provide flexible hiring options to suit your business
                requirements.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.networkContent}>
          <div className={styles.networkParent}>
            <div className={styles.network}>
              <div className={styles.internshipIconParent}>
                <img
                  className={styles.internshipIcon}
                  loading="lazy"
                  alt=""
                  src="/6@2x.png"
                />
                <button className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div
                    className={styles.postJobs}
                  >{`Post Jobs & Internships`}</div>
                </button>
              </div>
            </div>
            <div className={styles.technologiesDetailsParent}>
              <div className={styles.technologiesDetails}>
                <div
                  className={styles.postJobs1}
                >{`Post Jobs & Internship`}</div>
              </div>
              <div className={styles.withBigstartupsNetwork}>
                With Bigstartups Network, there are no regional barriers. Expand
                your horizons and connect with talent beyond borders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NetworkingDescription.propTypes = {
  className: PropTypes.string,
};

export default NetworkingDescription;
