import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import ExpansionIcon from "../components/expansion-icon";
import ExpansionDetail from "../components/expansion-detail";
import ExpansionSubtitle from "../components/expansion-subtitle";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import NetworkingDescription from "../components/networking-description";
import AdditionalBenefitsTitle from "../components/additional-benefits-title";
import FrameComponent5 from "../components/frame-component5";
import styles from "./index.module.css";

const WorkWithStartups = () => {
  return (
    <div className={styles.workWithStartups}>
      <FrameComponent1 />
      <FrameComponent2 />
      <section className={styles.solutionsContent}>
        <div className={styles.accessToWide}>
          Access to wide pool of student talent across the globe
        </div>
      </section>
      <section className={styles.accessContent}>
        <h3 className={styles.forStudents}>For Students</h3>
      </section>
      <ExpansionIcon />
      <ExpansionDetail />
      <ExpansionSubtitle />
      <div className={styles.networkingOpportunitiesWrapper}>
        <div className={styles.networkingOpportunities}>
          Networking Opportunities
        </div>
      </div>
      <section className={styles.byConnectingWithStartupsAnWrapper}>
        <div className={styles.byConnectingWith}>
          By connecting with startups and professionals from around the world,
          individuals can expand their professional network and access valuable
          connections and resources. These networking opportunities not only
          facilitate career advancement but also foster a sense of community and
          collaboration within the global startup ecosystem.
        </div>
      </section>
      <section className={styles.dividerWrapper}>
        <div className={styles.divider} />
      </section>
      <div className={styles.additionalBenefitsWrapper}>
        <div className={styles.additionalBenefits}>Additional Benefits</div>
      </div>
      <FrameComponent3 />
      <FrameComponent4 />
      <section className={styles.networkingTitle}>
        <h3 className={styles.forStartups}>For Startups</h3>
      </section>
      <NetworkingDescription />
      <section className={styles.keyBenefitsForStartupsWrapper}>
        <div className={styles.keyBenefitsFor}>Key benefits for startups?</div>
      </section>
      <AdditionalBenefitsTitle />
      <div className={styles.globalExpansionOpportunitiesWrapper}>
        <div className={styles.globalExpansionOpportunities}>
          Global Expansion Opportunities
        </div>
      </div>
      <FrameComponent5 />
      <div className={styles.breakingDownGeographicBarriWrapper}>
        <div className={styles.breakingDownGeographic}>
          Breaking Down Geographic Barriers
        </div>
      </div>
      <section className={styles.networkStartupsCanOvercomeWrapper}>
        <div className={styles.networkStartupsCan}>
          Network, startups can overcome these barriers and connect with talent
          from around the world. This opens up new possibilities for
          collaboration and expansion, allowing startups to build diverse and
          dynamic teams regardless of location.
        </div>
      </section>
      <section className={styles.callToActionWrapper}>
        <div className={styles.callToAction} />
      </section>
      <section className={styles.benefitsContent}>
        <div className={styles.readyToTake}>
          Ready to take the first step towards an exciting career journey?
        </div>
      </section>
      <section className={styles.expansion}>
        <div className={styles.exploreBigstartupsNetworks}>
          Explore Bigstartups Network's "Work with Startups" section today and
          unlock a world of possibilities.
        </div>
      </section>
      <div className={styles.expansionContent}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.joinNow}>Join Now</div>
        </button>
      </div>
    </div>
  );
};

export default WorkWithStartups;
