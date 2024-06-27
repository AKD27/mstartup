import PropTypes from "prop-types";
import styles from "./group-component.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.sLogo112821678995799ImgParent}>
              <img
                className={styles.sLogo112821678995799ImgIcon}
                loading="lazy"
                alt=""
                src="/s-logo-11282-1678995799-img@2x.png"
              />
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.techSavvyRealEstateAgentParent}>
                    <h3 className={styles.techSavvyReal}>
                      Tech Savvy Real Estate Agent
                    </h3>
                    <div className={styles.sellstateHeartlandRealty}>
                      Sellstate Heartland Realty
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.locationIconWrapper}>
                      <img
                        className={styles.locationIcon}
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.overlandPark}>
                      Overland Park , USA (Hybrid)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className={styles.jobDescription}>Job Description</h3>
          </div>
          <div className={styles.frameWrapper1}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.viewJob}>View Job</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.candidateDescription}>
        <div className={styles.candidateWillServe}>
          Candidate will serve as customer service executive resolving customer
          queries in line with the client and business guidelines. Individuals
          with experience in handling Inbound calls from UK customers.
        </div>
      </div>
      <div className={styles.frameInner} />
      <div className={styles.frameWrapper2}>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper3}>
            <div className={styles.dateParent}>
              <div className={styles.date}>Date:</div>
              <div className={styles.dateValueWrapper}>
                <div className={styles.dateValue}>04/04/2023</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameParent4}>
              <div className={styles.jobTypeWrapper}>
                <div className={styles.jobType}>Job Type:</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.onSite}>On-site</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.statusWrapper}>
              <div className={styles.status}>Status:</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameChild1} />
              <div className={styles.approved}>Approved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
