import ProfileHeader from "./profile-header";
import PropTypes from "prop-types";
import styles from "./date-time.module.css";

const DateTime = ({ className = "" }) => {
  return (
    <section className={[styles.dateTime, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.priceOptionsParent}>
          <ProfileHeader />
          <div className={styles.priceHeader}>
            <div className={styles.separator} />
            <div className={styles.sessionFee}>
              <div className={styles.services}>
                <div className={styles.minSessionIcon}>
                  <h3 className={styles.consultationPrices}>
                    Consultation Prices
                  </h3>
                  <div className={styles.priceSymbols}>
                    <div className={styles.hourlySession}>
                      <div className={styles.experienceFee}>
                        <div className={styles.skillsRow}>
                          <div className={styles.nameRow}>
                            <img
                              className={styles.arcticonspriceconverter}
                              alt=""
                              src="/arcticonspriceconverter.svg"
                            />
                            <div className={styles.experienceFeeLabel}>
                              <div className={styles.minSession}>
                                30 min session
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.badgeContentParent}>
                          <div className={styles.badgeContent}>
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
                        <div className={styles.letsIconstimeLightParent}>
                          <img
                            className={styles.letsIconstimeLight}
                            alt=""
                            src="/letsiconstimelight.svg"
                          />
                          <div className={styles.availability}>
                            Availability
                          </div>
                        </div>
                      </div>
                      <div className={styles.minSession1}>
                        <div className={styles.minSessionLabelParent}>
                          <div className={styles.minSessionLabel}>
                            <div className={styles.div}>₹1000</div>
                          </div>
                          <div className={styles.hourlySessionIcon}>
                            <div className={styles.div1}>₹1500</div>
                          </div>
                          <div className={styles.monSat}>Mon-Sat</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.priceSymbols1}>
                  <button className={styles.serviceItems}>
                    <div className={styles.serviceItemsChild} />
                    <div className={styles.bookNow}>Book Now</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.serviceItems1}>
          <div className={styles.frameParent}>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.marketingConsulting}>
                Marketing Consulting
              </div>
            </button>
            <div className={styles.frameWrapper}>
              <button className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <div className={styles.accountsConsulting}>
                  Accounts Consulting
                </div>
              </button>
            </div>
            <button className={styles.profileContent}>
              <div className={styles.profileContentChild} />
              <div className={styles.buisnessConsulting}>
                Buisness Consulting
              </div>
            </button>
            <div className={styles.bookButtonContainer}>
              <button className={styles.serviceItems2}>
                <div className={styles.serviceItemsItem} />
                <div className={styles.buisnessConsulting1}>
                  Buisness Consulting
                </div>
              </button>
            </div>
            <div className={styles.priceContainer}>
              <button className={styles.accountConsultingItem}>
                <div className={styles.accountConsultingItemChild} />
                <div className={styles.buisnessConsulting2}>
                  Buisness Consulting
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DateTime.propTypes = {
  className: PropTypes.string,
};

export default DateTime;
