import PropTypes from "prop-types";
import styles from "./slots-content.module.css";

const SlotsContent = ({ className = "" }) => {
  return (
    <div className={[styles.slotsContent, className].join(" ")}>
      <div className={styles.slotsTypes}>
        <div className={styles.slotsTypeRow}>
          <div className={styles.slotsType}>
            <div className={styles.consultingTypeLabel}>
              <div className={styles.consultingTypeLabelChild} />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <h3 className={styles.startupConsulting}>Startup Consulting</h3>
              </div>
              <div className={styles.careerType}>
                <h3 className={styles.careerConsulting}>Career Consulting</h3>
              </div>
            </div>
          </div>
          <div className={styles.calendar}>
            <div className={styles.calendarDays}>
              <img
                className={styles.calendarDaysChild}
                loading="lazy"
                alt=""
                src="/group-228.svg"
              />
            </div>
            <div className={styles.todayAvailability}>
              <div className={styles.todayLabel}>
                <div className={styles.today}>Today</div>
              </div>
              <div className={styles.available}>08 Available</div>
            </div>
            <div className={styles.tomorrowAvailability}>
              <div className={styles.tomorrowLabel}>
                <div className={styles.tomorrow}>
                  <div className={styles.tomorrow1}>Tomorrow</div>
                </div>
                <div className={styles.available1}>06 Available</div>
              </div>
            </div>
            <div className={styles.saturdayAvailability}>
              <div className={styles.saturdayLabel}>
                <div className={styles.saturday}>
                  <div className={styles.sat1may}>Sat 1,May</div>
                </div>
                <div className={styles.available2}>06 Available</div>
              </div>
            </div>
            <div className={styles.calendarDays1}>
              <img
                className={styles.calendarDaysItem}
                loading="lazy"
                alt=""
                src="/group-227.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.calendarIndicator}>
          <div className={styles.indicatorContainer}>
            <div className={styles.indicatorContainerChild} />
            <div className={styles.dateIndicator} />
          </div>
        </div>
      </div>
    </div>
  );
};

SlotsContent.propTypes = {
  className: PropTypes.string,
};

export default SlotsContent;
