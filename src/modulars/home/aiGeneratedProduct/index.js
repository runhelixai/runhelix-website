"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./aiGeneratedProduct.module.scss";
import Link from "next/link";
const SoraIcon = '/assets/icons/sora.svg';
const VeoIcon = '/assets/icons/veo.svg';
const klingIcon = '/assets/icons/kling-icon.svg';
const LabsIcon = '/assets/icons/labs.svg';
const RunwayMLIcon = '/assets/icons/RunwayML.svg';
const WanIcon = '/assets/icons/Wan.svg';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function AiGeneratedProduct() {
  return (
    <main className={styles.herobannermain}>
      <div className={styles.herobannerbg}>
        {/* <HexagonalWaveBanner /> */}
      </div>
      <div className={styles.herobanner}>

        <div className={styles.pageBanner}>
          {/* <div className={styles.bannerImage}>
              <img
                className={styles.keyframeAnimation}
                src={BannerImage}
                alt="BannerImage"
              />
            </div> */}

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
                  Digital Ads · UGC Affiliate Testimonials · Product Photo shoots <br /> · Short & Long-form Promotional Videos
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
  );
}
