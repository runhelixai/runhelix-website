'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ugcTestimonial.module.scss';
import classNames from 'classnames';

const Tiktok1 = '/assets/images/tiktok1.png';
const Tiktok2 = '/assets/images/tt2.png';
const Tiktok3 = '/assets/images/tt3.png';
const Tiktok4 = '/assets/images/tt4.png';

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
            {/* ================= UGC TESTIMONIAL ================= */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                UGC Testimonial Videos
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
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <img src={img} alt={`Tiktok${i}`} />
                    </motion.div>
                ))}
            </motion.div>

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
                        <img src={img} alt={`Ad${i}`} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
