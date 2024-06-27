import PropTypes from "prop-types";
import styles from "./expansion-detail.module.css";

const ExpansionDetail = ({ className = "" }) => {
  return (
    <section className={[styles.expansionDetail, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.flexibilityContainerWrapper}>
              <div className={styles.flexibilityContainer}>
                <div className={styles.opportunityIconWrapper}>
                  <img
                    className={styles.opportunityIcon}
                    loading="lazy"
                    alt=""
                    src="/28@2x.png"
                  />
                </div>
                <div className={styles.diverseOpportunitiesParent}>
                  <div className={styles.diverseOpportunities}>
                    Diverse Opportunities
                  </div>
                  <div className={styles.bigstartupsNetworkOpens}>
                    Bigstartups Network opens doors to a wide array of
                    opportunities, allowing individuals to explore roles in
                    startups spanning various industries and locations. This
                    diversity provides exposure to different business models,
                    cultures, and challenges, enriching one's professional
                    experience and skill set.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.opportunityDivider} />
          </div>
        </div>
        <img
          className={styles.placeholderIcon}
          loading="lazy"
          alt=""
          src="/23@2x.png"
        />
      </div>
    </section>
  );
};

ExpansionDetail.propTypes = {
  className: PropTypes.string,
};

export default ExpansionDetail;
