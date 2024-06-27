import PropTypes from "prop-types";
import styles from "./expansion-subtitle.module.css";

const ExpansionSubtitle = ({ className = "" }) => {
  return (
    <section className={[styles.expansionSubtitle, className].join(" ")}>
      <div className={styles.skillDevelopmentContentParent}>
        <div className={styles.skillDevelopmentContent}>
          <div className={styles.globalItemParent}>
            <div className={styles.globalItem}>
              <div className={styles.opportunityButton}>
                <div className={styles.flexibilityIconParent}>
                  <img
                    className={styles.flexibilityIcon}
                    loading="lazy"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className={styles.careerControlContent}>
                    <div className={styles.flexibility}>Flexibility</div>
                    <div className={styles.thePlatformOffers}>
                      The platform offers flexibility in terms of employment
                      arrangements, catering to different preferences and
                      lifestyles. Whether someone seeks the stability of
                      full-time employment, the flexibility of part-time roles,
                      or the autonomy of freelancing, Bigstartups Network
                      empowers individuals to tailor their work arrangements to
                      suit their needs and aspirations.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.flexibilityDivider} />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.skillDevelopmentIconWrapper}>
                <img
                  className={styles.skillDevelopmentIcon}
                  loading="lazy"
                  alt=""
                  src="/26@2x.png"
                />
              </div>
              <div className={styles.careerControlItem}>
                <div className={styles.skillDevelopment}>Skill Development</div>
                <div className={styles.engagingWithStartups}>
                  Engaging with startups from diverse backgrounds provides ample
                  opportunities for skill development and growth. Whether it's
                  through challenging projects, exposure to new technologies, or
                  mentorship from seasoned entrepreneurs, Bigstartups Network
                  offers a dynamic learning environment where individuals can
                  continuously enhance their capabilities and adapt to evolving
                  industry trends.
                </div>
              </div>
              <div className={styles.skillDivider} />
            </div>
          </div>
        </div>
        <div className={styles.flexibilityRowParent}>
          <div className={styles.flexibilityRow}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.globalReachParent}>
                  <div className={styles.globalReach}>Global Reach</div>
                  <div className={styles.byTranscendingRegionalBoundWrapper}>
                    <div className={styles.byTranscendingRegional}>
                      By transcending regional boundaries, Bigstartups Network
                      enables individuals to access opportunities worldwide.
                      This global reach not only expands the pool of available
                      positions but also fosters cross-cultural collaboration
                      and networking, opening doors to international career
                      advancement and personal growth.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.globalDivider} />
            </div>
          </div>
          <div className={styles.careerControlIconParent}>
            <img
              className={styles.careerControlIcon}
              loading="lazy"
              alt=""
              src="/24@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.opportunityContainerParent}>
                <div className={styles.opportunityContainer}>
                  <div className={styles.careerControlParent}>
                    <div className={styles.careerControl}>Career Control</div>
                    <div className={styles.bigstartupsNetworkPuts}>
                      Bigstartups Network puts individuals in the driver's seat
                      of their careers, allowing them to make informed choices
                      aligned with their goals and values. This autonomy fosters
                      a sense of empowerment and ownership over one's
                      professional trajectory, enabling individuals to pursue
                      paths that resonate with their interests, skills, and
                      aspirations.
                    </div>
                  </div>
                </div>
                <div className={styles.careerDivider} />
              </div>
              <div className={styles.dividerParent}>
                <div className={styles.divider} />
                <div className={styles.opportunityItem}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/25@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ExpansionSubtitle.propTypes = {
  className: PropTypes.string,
};

export default ExpansionSubtitle;
