import Component from "./component";
import ProfileHeader from "./profile-header";
import PropTypes from "prop-types";
import styles from "./main.module.css";

const Main = ({ className = "" }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <Component circle="/ellipse-39@2x.png" divider="pending_I14:573;89:875" />
      <div className={styles.consultantProfile}>
        <div className={styles.profileWrapper}>
          <div className={styles.profileWrapperChild} />
          <div className={styles.profileContent}>
            <ProfileHeader />
            <div className={styles.pricing}>
              <div className={styles.pricingWrapper}>
                <div className={styles.priceDivider} />
              </div>
              <div className={styles.priceHeader}>
                <h3 className={styles.consultationPrices}>
                  Consultation Prices
                </h3>
                <div className={styles.priceOptions}>
                  <div className={styles.optionList}>
                    <div className={styles.optionItem}>
                      <div className={styles.priceDetails}>
                        <div className={styles.priceValue}>
                          <img
                            className={styles.arcticonspriceconverter}
                            alt=""
                            src="/arcticonspriceconverter.svg"
                          />
                          <div className={styles.sessionDuration}>
                            <div className={styles.minSession}>
                              30 min session
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.optionItem1}>
                        <div className={styles.priceDetails1}>
                          <img
                            className={styles.arcticonspriceconverter1}
                            alt=""
                            src="/arcticonspriceconverter.svg"
                          />
                        </div>
                        <div
                          className={styles.hrSession}
                        >{`01 hr session `}</div>
                      </div>
                      <div className={styles.availabilityWrapper}>
                        <img
                          className={styles.letsIconstimeLight}
                          alt=""
                          src="/letsiconstimelight.svg"
                        />
                        <div className={styles.availability}>Availability</div>
                      </div>
                    </div>
                    <div className={styles.booking}>
                      <div className={styles.buttonWrapper}>
                        <div className={styles.priceSymbol}>
                          <div className={styles.div}>₹1000</div>
                        </div>
                        <div className={styles.priceValue1}>
                          <div className={styles.priceInput}>
                            <div className={styles.priceInputInner}>
                              <div className={styles.div1}>₹1500</div>
                              <div className={styles.bookButton}>
                                <h3 className={styles.bookNow}>Book Now</h3>
                              </div>
                            </div>
                          </div>
                          <div className={styles.monSat}>Mon-Sat</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.consultingCategories}>
            <div className={styles.categories}>
              <button className={styles.categoryLabels}>
                <div className={styles.categoryLabelsChild} />
                <div className={styles.marketingConsulting}>
                  Marketing Consulting
                </div>
              </button>
              <div className={styles.accountsCategory}>
                <button className={styles.accountsLabel}>
                  <div className={styles.accountsLabelChild} />
                  <div className={styles.accountsConsulting}>
                    Accounts Consulting
                  </div>
                </button>
              </div>
              <button className={styles.categoryLabels1}>
                <div className={styles.categoryLabelsItem} />
                <div className={styles.buisnessConsulting}>
                  Buisness Consulting
                </div>
              </button>
              <div className={styles.categoryLabels2}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.buisnessConsulting1}>
                    Buisness Consulting
                  </div>
                </button>
              </div>
              <div className={styles.categoryLabels3}>
                <button className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.buisnessConsulting2}>
                    Buisness Consulting
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
