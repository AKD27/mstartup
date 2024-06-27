import ContentCell from "../components/content-cell";
import styles from "./daily-spotlight-monthly.module.css";

const Home = () => {
  return (
    <div className={styles.dailySpotlightMonthly}>
      <main className={styles.spotlightMonthly}>
        <section className={styles.spotlightMonthlyInner}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.headerTitleWrapper}>
                <img
                  className={styles.headerTitleIcon}
                  loading="lazy"
                  alt=""
                  src="/151@2x.png"
                />
              </div>
              <div className={styles.spotlightContent}>
                <h1 className={styles.inSpotlightThis}>
                  In Spotlight This Month
                </h1>
                <div className={styles.spotlightDescription}>
                  <h3
                    className={styles.discoverThisMonths}
                  >{`Discover This Month’s Featured Videos & Articles`}</h3>
                </div>
              </div>
            </div>
            <div className={styles.contentGrid}>
              <div className={styles.contentRow}>
                <div className={styles.contentRowInner}>
                  <div className={styles.spotlightVideosTitleParent}>
                    <div className={styles.spotlightVideosTitle}>
                      <h1
                        className={styles.spotlightVideos}
                      >{`Spotlight Videos `}</h1>
                    </div>
                    <div
                      className={styles.weAreThrilled}
                    >{`We are thrilled to present a special of featuring your Startup, Product & Members , Explore about startups, products & member of our community who is making waves in the industry by our featured videos, podcasts, interviews, stories and articles in our spotlight section.`}</div>
                  </div>
                </div>
                <div className={styles.contentCell}>
                  <div className={styles.contentCell1}>
                    <div className={styles.contentCell2}>
                      <div className={styles.buisnessConsulting}>
                        Buisness consulting
                      </div>
                    </div>
                    <h3 className={styles.theFutureOf}>
                      The Future of AI Writing: What do you want to know
                    </h3>
                  </div>
                </div>
                <div className={styles.spotlightArticlesRowWrapper}>
                  <div className={styles.spotlightArticlesRow}>
                    <div className={styles.spotlightArticle}>
                      <div className={styles.buisnessConsulting1}>
                        Buisness consulting
                      </div>
                    </div>
                    <h3 className={styles.theFutureOf1}>
                      The Future of AI Writing: What do you want to know
                    </h3>
                  </div>
                </div>
                <div className={styles.contentCell3}>
                  <div className={styles.frameGroup}>
                    <div className={styles.buisnessConsultingWrapper}>
                      <div className={styles.buisnessConsulting2}>
                        Buisness consulting
                      </div>
                    </div>
                    <h3 className={styles.theFutureOf2}>
                      The Future of AI Writing: What do you want to know
                    </h3>
                  </div>
                </div>
                <div className={styles.spotlightArticle1}>
                  <div className={styles.spotlightArticle2}>
                    <div className={styles.spotlightArticle3}>
                      <div className={styles.buisnessConsulting3}>
                        Buisness consulting
                      </div>
                    </div>
                    <h3 className={styles.theFutureOf3}>
                      The Future of AI Writing: What do you want to know
                    </h3>
                  </div>
                </div>
                <div className={styles.spotlightArticle4}>
                  <div className={styles.spotlightArticle5}>
                    <div className={styles.spotlightArticle6}>
                      <div className={styles.liveNationTheParentCompanyParent}>
                        <div className={styles.liveNationTheParentCompany} />
                        <div className={styles.articlesTitle}>
                          <h1 className={styles.spotlightArticles}>
                            Spotlight Articles
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.exploreTheInspiring}
                    >{`Explore the inspiring journey of our startups & products from its inception to its current success.`}</div>
                  </div>
                </div>
                <ContentCell />
                <ContentCell propPadding="0px 0px 33px" />
                <div className={styles.featureSpotlightContentWrapper}>
                  <div className={styles.featureSpotlightContent}>
                    <div className={styles.featureSpotlightTitle}>
                      <div className={styles.featureTitleWrapper}>
                        <button className={styles.featureTitle}>
                          <div className={styles.featureTitleChild} />
                          <div className={styles.featureSpotlight}>
                            Feature Spotlight
                          </div>
                        </button>
                      </div>
                      <div className={styles.liveNationConfirmsTicketmas} />
                    </div>
                    <div className={styles.spotlightAbbreviation}>
                      <h1 className={styles.spTlight}>SP TLIGHT</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.getFeaturedContentWrapper}>
          <div className={styles.getFeaturedContent}>
            <div className={styles.getFeaturedTitleParent}>
              <div className={styles.getFeaturedTitle}>
                <h3 className={styles.getStartupsFeatured}>
                  Get startups Featured in BigStartups Spotlight
                </h3>
              </div>
              <div className={styles.featureYourFounders}>
                Feature your founders, startups, and products through engaging
                videos and articles in our Spotlight Section, maximizing your
                exposure and credibility.
              </div>
            </div>
            <div className={styles.getFeaturedButton}>
              <button className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.getFeatured}>Get Featured</div>
              </button>
            </div>
          </div>
        </section>
        <section className={styles.frameContainer}>
          <div className={styles.showcaseTypesWrapper}>
            <div className={styles.showcaseTypes}>
              <div className={styles.podcastWrapper}>
                <div className={styles.podcast}>Podcast</div>
              </div>
              <div className={styles.interviews}>Interviews</div>
              <div className={styles.startupStories}>Startup Stories</div>
            </div>
          </div>
          <div className={styles.storyShowcase}>
            <div className={styles.storyDescription}>
              <div className={styles.shareYourJourney}>
                Share your journey and insights
              </div>
            </div>
            <div className={styles.highlightYourStartup}>
              Highlight your startup story
            </div>
            <div className={styles.showcasingYourAchievements}>
              Showcasing your achievements
            </div>
          </div>
        </section>
        <div className={styles.featureTypesWrapper}>
          <div className={styles.featureTypes}>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureVideos}>Feature Videos</div>
              </div>
              <div className={styles.featureYourBrand}>
                Feature your brand videos
              </div>
            </div>
            <div className={styles.featureList1}>
              <div className={styles.featureArticlesWrapper}>
                <div className={styles.featureArticles}>Feature Articles</div>
              </div>
              <div className={styles.featureYourBrand1}>
                Feature your brand articles
              </div>
            </div>
          </div>
        </div>
        <section className={styles.communityMessageWrapper}>
          <div className={styles.communityMessage}>
            <h3 className={styles.thankYouFor}>
              Thank you for being a part of our community. We’re excited to see
              your startup grow and thrive.
            </h3>
            <div className={styles.socialMediaCall}>
              <div className={styles.joinOurCommunity}>
                Join our community on social media to stay updated with the
                latest news, tips, and success stories from fellow
                entrepreneurs.
              </div>
            </div>
          </div>
        </section>
        <section className={styles.footer}>
          <div className={styles.footerChild} />
          <input className={styles.gridiconsstory} type="checkbox" />
          <input className={styles.gridiconsstory1} type="checkbox" />
          <input className={styles.gridiconsstory2} type="checkbox" />
          <input className={styles.gridiconsstory3} type="checkbox" />
          <div className={styles.socialIcons}>
            <img
              className={styles.atCover244331711457971ImgIcon}
              alt=""
              src="/at-cover-24433-1711457971-img800@2x.png"
            />
            <img
              className={styles.socialIconsChild}
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className={styles.socialIcons1}>
            <img
              className={styles.atCover244331711457971ImgIcon1}
              alt=""
              src="/at-cover-24433-1711457971-img800@2x.png"
            />
            <img
              className={styles.socialIconsItem}
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className={styles.socialIcons2}>
            <img
              className={styles.atCover244331711457971ImgIcon2}
              alt=""
              src="/at-cover-24433-1711457971-img800@2x.png"
            />
            <img
              className={styles.socialIconsInner}
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className={styles.socialIcons3}>
            <img
              className={styles.atCover244331711457971ImgIcon3}
              alt=""
              src="/at-cover-24433-1711457971-img800@2x.png"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <img
            className={styles.atCover244801712641546ImgIcon}
            loading="lazy"
            alt=""
            src="/at-cover-24480-1712641546-img800@2x.png"
          />
          <img
            className={styles.atCover244801712641546ImgIcon1}
            loading="lazy"
            alt=""
            src="/at-cover-24480-1712641546-img800@2x.png"
          />
          <img
            className={styles.atCover244801712641546ImgIcon2}
            loading="lazy"
            alt=""
            src="/at-cover-24480-1712641546-img800@2x.png"
          />
          <img
            className={styles.atCover244801712641546ImgIcon3}
            loading="lazy"
            alt=""
            src="/at-cover-24480-1712641546-img800@2x.png"
          />
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/131@2x.png"
          />
          <img
            className={styles.imageContainerIcon}
            loading="lazy"
            alt=""
            src="/141@2x.png"
          />
          <img
            className={styles.liveNationImage}
            loading="lazy"
            alt=""
            src="/10@2x.png"
          />
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/11@2x.png"
          />
          <img
            className={styles.imageIcon1}
            loading="lazy"
            alt=""
            src="/12@2x.png"
          />
          <div className={styles.ellipseParent}>
            <div className={styles.frameInner} />
            <div className={styles.ellipseDiv} />
          </div>
          <img
            className={styles.spotlight1Icon}
            loading="lazy"
            alt=""
            src="/spotlight-1@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
