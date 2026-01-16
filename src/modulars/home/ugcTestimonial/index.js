'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ugcTestimonial.module.scss';
import classNames from 'classnames';

const Tiktok1 = '/assets/images/tiktok1.png';
const TiktokFrame = '/assets/images/tiktok-frame-right.png';

const Tiktok2 = '/assets/images/tt2.png';
const Tiktok3 = '/assets/images/tt3.png';
const Tiktok4 = '/assets/images/tt4.png';
const Video1 = '/assets/video/ugc/1.mp4';
const Video2 = '/assets/video/ugc/2.mp4';
const Video3 = '/assets/video/ugc/3.mp4';
const Video4 = '/assets/video/ugc/4.mp4';
const Video01 = '/assets/video/01.mp4';
const Video02 = '/assets/video/02.mp4';

/* =====================
   Animation Variants
===================== */
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.96,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function UgcTestimonial() {
    return (
        <div className={styles.ugcTestimonial}>
            <div className='container-xs'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    UGC Testimonial Videos
                </motion.h2>
                <div className={styles.videoGrid}>
                    <div className={styles.items}>
                        <video src={Video1} alt='video1' autoPlay muted loop playsInline></video>
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <video src={Video2} alt='video2' autoPlay muted loop playsInline></video>
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <video src={Video3} alt='video3' autoPlay muted loop playsInline></video>
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <video src={Video4} alt='video4' autoPlay muted loop playsInline></video>
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>

                </div>

                {/* ================= PROMOTIONAL ================= */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Promotional Videos- Long & Shortform
                </motion.h2>
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className={styles.items}
                        variants={itemVariants}
                        whileHover={{ scale: 1.04 }}
                    >
                        <img src={Tiktok1} alt="Tiktok1" />
                    </motion.div>

                    <motion.div
                        className={styles.items}
                        variants={itemVariants}
                        whileHover={{ scale: 1.04 }}
                    >
                        <img src={Tiktok2} alt="Tiktok2" />
                    </motion.div>

                    <motion.div
                        className={classNames(styles.items, styles.fullCol)}
                        variants={itemVariants}
                    >
                        <div className={styles.newgrid}>
                            <motion.img
                                src={Tiktok3}
                                alt="Tiktok3"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.img
                                src={Tiktok4}
                                alt="Tiktok4"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
                {/* fout */}

                {/* ================= PRODUCT PHOTOSHOOTS ================= */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Product Photoshoots
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {[Tiktok1, Tiktok2, Tiktok1, Tiktok2].map((img, i) => (
                        <motion.div
                            key={i}
                            className={styles.items}
                            variants={itemVariants}
                            whileHover={{ scale: 1.04 }}
                        >
                            <img src={img} alt={`Photo${i}`} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* ================= DIGITAL ADS ================= */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Digital Ads
                </motion.h2>

                <div className={styles.videoGrid}>
                    <div className={styles.items}>
                        <video src={Video01} alt='Video01' autoPlay muted loop playsInline></video>
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <video src={Video02} alt='Video02' autoPlay muted loop playsInline></video>
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.onlyImage}>
                            <img src={Tiktok1} alt='Tiktok1' />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.onlyImage}>
                            <img src={Tiktok2} alt='Tiktok2' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
