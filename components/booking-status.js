import PropTypes from "prop-types";
import styles from "./booking-status.module.css";

const BookingStatus = ({ className = "" }) => {
  return (
    <section className={[styles.bookingStatus, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.bookingIdBackgroundParent}>
          <img
            className={styles.bookingIdBackground}
            loading="lazy"
            alt=""
            src="/18@2x.png"
          />
          <div className={styles.serviceItems}>
            <div className={styles.bookingId}>Booking ID</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div}>25716236</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.category1Wrapper}>
              <img
                className={styles.category1Icon}
                loading="lazy"
                alt=""
                src="/category-1@2x.png"
              />
            </div>
            <div className={styles.bookingIdContainer}>
              <div className={styles.consultationCategory}>
                Consultation Category
              </div>
            </div>
            <div className={styles.startupConsultation}>
              Startup consultation
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.sessionTimeBackgroundParent}>
              <img
                className={styles.sessionTimeBackground}
                loading="lazy"
                alt=""
                src="/201@2x.png"
              />
              <div className={styles.bookingIdValue}>
                <div
                  className={styles.sessionTime}
                >{`Session Time & date`}</div>
              </div>
            </div>
            <div className={styles.categoryHeader}>
              <div className={styles.wedMay102024}>{`Wed, May 10,2024 `}</div>
            </div>
            <div className={styles.sessionTimeHeader}>
              <div className={styles.categoryTypeParent}>
                <div className={styles.categoryType}>
                  <div className={styles.am}>7:00-8:00AM</div>
                </div>
                <div className={styles.timeOfDaySeparator} />
              </div>
            </div>
            <div className={styles.timeOfDayContainer}>
              <div className={styles.hrs}>01 Hrs</div>
            </div>
          </div>
        </div>
        <div className={styles.bookingStatusBackgroundParent}>
          <img
            className={styles.bookingStatusBackground}
            loading="lazy"
            alt=""
            src="/17@2x.png"
          />
          <div className={styles.timeOfDay}>
            <div className={styles.sessionDetails}>
              <div className={styles.bookingStatusParent}>
                <div className={styles.bookingStatus1}>Booking Status</div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.confirmed}>Confirmed</div>
                </div>
              </div>
              <div className={styles.dateTime}>
                <button className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.joinSession}>Join Session</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BookingStatus.propTypes = {
  className: PropTypes.string,
};

export default BookingStatus;
