"use client";
import React from "react";
import styles from "./herobanner.module.scss";
import HexagonalWaveBanner from "@/components/WaveBanner";
const BannerImage = "assets/images/banner-img.png";
const HelixImage = "assets/logo/helix.png";
const SoraIcon = '/assets/icons/sora.svg';
const VeoIcon = '/assets/icons/veo.svg';
const klingIcon = '/assets/icons/kling-icon.svg';
const LabsIcon = '/assets/icons/labs.svg';
const RunwayMLIcon = '/assets/icons/RunwayML.svg';
const WanIcon = '/assets/icons/Wan.svg';

export default function Herobanner() {
  return (
    <>
      <main className={styles.herobannermain}>
        <div className={styles.herobannerbg}>
          {/* <HexagonalWaveBanner /> */}
        </div>
        <div className={styles.herobanner}>
          <div className={styles.loginbutton}>
            <a href="https://platform.runhelix.ai/auth" target="_blank">
              <button>Login</button>
            </a>
          </div>
          <div className={styles.pageBanner}>
            {/* <div className={styles.bannerImage}>
              <img
                className={styles.keyframeAnimation}
                src={BannerImage}
                alt="BannerImage"
              />
            </div> */}

            <div className="container">
              <div className={styles.spacing}>
                <div className={styles.centerText}>
                  <div className={styles.centerLogo}>
                    <img src={HelixImage} alt="HelixImage" />
                  </div>
                  <p>The DNA of Consumer Technology Product Storytelling</p>
                </div>
              </div>
            </div>
            <div className={styles.heroTextAlignment}>
              <div className="container">
                <div className={styles.first}>
                  <h3>
                    AI Content Studio
                  </h3>
                  <h3>
                    Create Stunning Product Videos & Images That Sell
                  </h3>
                  <h4>
                    Digital Ads · UGC Affiliate Testimonials · Product Photo shoots · Short & Long-form Promotional Videos
                  </h4>
                  <h5>
                    Built for eCommerce Companies, Creators, and Agencies
                  </h5>
                  <h6>
                    Powered by the latest versions of the world’s best models
                  </h6>
                </div>
                <div className={styles.allIconAlignment}>
                  <div className={styles.iconText}>
                    <img src={SoraIcon} alt="SoraIcon" />
                    <span>
                      Sora 2 pro
                    </span>
                  </div>
                  <div className={styles.iconText}>
                    <img src={VeoIcon} alt="VeoIcon" />
                    <span>
                      Veo <br />Nanobana
                    </span>
                  </div>
                  <div className={styles.iconText}>
                    <img src={klingIcon} alt="klingIcon" />
                    <span>
                      KlingAI
                    </span>
                  </div>
                  <div className={styles.iconText}>
                    <img src={LabsIcon} alt="LabsIcon" />
                    <span>
                      11Labs
                    </span>
                  </div>
                  <div className={styles.iconText}>
                    <img src={RunwayMLIcon} alt="RunwayMLIcon" />
                    <span>
                      RunwayML
                    </span>
                  </div>
                  <div className={styles.iconText}>
                    <img src={WanIcon} alt="WanIcon" />
                    <span>
                      Wan
                    </span>
                  </div>
                  <div className={styles.iconText}>
                    <span>
                      + more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
