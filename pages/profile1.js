import Component from "../components/component";
import DateTime from "../components/date-time";
import BookingStatus from "../components/booking-status";
import styles from "./consulting-page-profile1.module.css";

const profile1 = () => {
  return (
    <div className={styles.consultingPageProfile}>
      <Component
        circle="/ellipse-391@2x.png"
        divider="pending_I14:825;89:875"
      />
      <DateTime />
      <div className={styles.joinSessionButtonContainer}>
        <h3 className={styles.bookingDetails}>Booking Details</h3>
      </div>
      <BookingStatus />
    </div>
  );
};

export default profile1;
