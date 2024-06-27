import PropTypes from "prop-types";
import styles from "./additional-benefits-title.module.css";

const AdditionalBenefitsTitle = ({ className = "" }) => {
  return (
    <section className={[styles.additionalBenefitsTitle, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.savingsParent}>
          <div className={styles.savings}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.freelancingTitleParent}>
                  <div className={styles.freelancingTitle}>
                    <div className={styles.opportunityTitle}>
                      <div className={styles.accessToDiverseTalentParent}>
                        <div className={styles.accessToDiverse}>
                          Access to Diverse Talent
                        </div>
                        <img
                          className={styles.talentIcon}
                          loading="lazy"
                          alt=""
                          src="/3@2x.png"
                        />
                      </div>
                      <div className={styles.byTappingInto}>
                        By tapping into a global talent pool, startups can
                        benefit from a wide range of perspectives, experiences,
                        and skills. This diversity fosters innovation and
                        creativity within the team, leading to fresh ideas and
                        unique solutions to challenges.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                </div>
              </div>
              <img
                className={styles.solutionsIcon}
                loading="lazy"
                alt=""
                src="/4@2x.png"
              />
            </div>
          </div>
          <div className={styles.solutionsTitleParent}>
            <div className={styles.solutionsTitle}>
              <div className={styles.frameContainer}>
                <div className={styles.solutionsIconWrapper}>
                  <img
                    className={styles.solutionsIcon1}
                    loading="lazy"
                    alt=""
                    src="/30@2x.png"
                  />
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.internshipDescriptionTitleParent}>
                    <div className={styles.internshipDescriptionTitle}>
                      <div className={styles.tailoredSolutions}>
                        Tailored Solutions
                      </div>
                    </div>
                    <div className={styles.accessDescription}>
                      <div className={styles.studentResourcesCanBeTailoWrapper}>
                        <div className={styles.studentResourcesCan}>
                          Student resources can be tailored to meet the specific
                          needs of startups, whether it's in the form of
                          project-based work, part-time assistance, or
                          specialized skills. This flexibility allows startups
                          to scale their workforce according to demand without
                          committing to long-term contracts or excessive
                          expenses.
                        </div>
                      </div>
                      <div className={styles.accessDescriptionChild} />
                    </div>
                  </div>
                  <div className={styles.internshipTitle}>
                    <img className={styles.icon} alt="" src="/6-1@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.savingsIconParent}>
              <div className={styles.savingsIcon}>
                <div className={styles.accessSubtitle}>
                  <div className={styles.accessDetail}>
                    <div className={styles.costSavingsParent}>
                      <div className={styles.costSavings}>Cost Savings</div>
                      <div className={styles.startupsOftenOperate}>
                        Startups often operate on tight budgets, and accessing
                        cost-effective student resources can be a game-changer.
                        By leveraging student talent, startups can reduce their
                        overhead costs associated with hiring while still
                        accessing high-quality skills and services.
                      </div>
                    </div>
                  </div>
                  <div className={styles.accessSubtitleChild} />
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.lineParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.solutionsSubtitle}>
                    <div className={styles.solutionsDescription}>
                      <div className={styles.solutionsExplanation}>
                        <div className={styles.accessTitleParent}>
                          <div className={styles.accessTitle}>
                            <img
                              className={styles.modelsIcon}
                              alt=""
                              src="/5-1@2x.png"
                            />
                          </div>
                          <div className={styles.flexibleHiringModels}>
                            Flexible Hiring Models
                          </div>
                        </div>
                      </div>
                      <div className={styles.theAbilityTo}>
                        The ability to choose from a variety of hiring options,
                        including full-time employees, interns, or freelancers,
                        gives startups the freedom to structure their teams in a
                        way that best suits their current stage of growth and
                        objectives.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modelDescription}>
          <img
            className={styles.icon1}
            loading="lazy"
            alt=""
            src="/20@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

AdditionalBenefitsTitle.propTypes = {
  className: PropTypes.string,
};

export default AdditionalBenefitsTitle;
