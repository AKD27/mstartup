import FrameComponent6 from "../components/frame-component6";
import LiveStatus from "../components/live-status";
import GroupComponent from "../components/group-component";
import styles from "./job-is-live.module.css";

const JobIsLive = () => {
  return (
    <div className={styles.jobIsLive}>
      <main className={styles.whatsNext}>
        <div className={styles.whatsNextChild} />
        <FrameComponent6 />
        <LiveStatus />
        <h3 className={styles.greatNews}>Great News!</h3>
        <h3 className={styles.whatsNext1}>What’s Next?</h3>
        <h3 className={styles.thankYouFor}>
          Thank You for Choosing Bigstartups!
        </h3>
        <div className={styles.yourJobListing}>
          Your job listing is now visible to thousands of jobseekers and
          freelancers who are eager to join innovative startups like yours
        </div>
        <h3 className={styles.hiShashankRawat}>Hi Shashank Rawat,</h3>
        <section className={styles.weAppreciateYour}>
          We appreciate your trust in Bigstartups to help you find the perfect
          candidates. We look forward to seeing your startup grow and thrive!
        </section>
        <div className={styles.thankYou} />
        <div className={styles.thankYou1} />
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.manageJobs}>Manage Jobs</div>
        </button>
        <GroupComponent />
        <img className={styles.icon} loading="lazy" alt="" src="/71@2x.png" />
      </main>
    </div>
  );
};

export default JobIsLive;
