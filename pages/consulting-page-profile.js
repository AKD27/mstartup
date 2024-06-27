import Main from "../components/main";
import SlotsContent from "../components/slots-content";
import SessionDuration from "../components/session-duration";
import styles from "./consulting-page-profile.module.css";

const ConsultingPageProfile = () => {
  return (
    <div className={styles.consultingPageProfile}>
      <Main />
      <section className={styles.availableSlotsContainerWrapper}>
        <div className={styles.availableSlotsContainer}>
          <div className={styles.slotsHeader}>
            <h3 className={styles.availableSlots}>Available Slots</h3>
          </div>
          <SlotsContent />
          <SessionDuration />
          <div className={styles.payment}>
            <div className={styles.paymentContainer}>
              <button className={styles.paymentLabel}>
                <div className={styles.paymentLabelChild} />
                <div className={styles.preceedPayment}>Preceed Payment</div>
              </button>
            </div>
            <div className={styles.paymentSeparator} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingPageProfile;
