'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './marketingSection.module.scss';

const GlobalIcon = '/assets/icons/global.svg';
const ProductIcon = '/assets/icons/product.svg';
const BrandIcon = '/assets/icons/brand.svg';
const PerformanceIcon = '/assets/icons/Performance.svg';
const PromoIcon = '/assets/icons/promo.svg';
const EarthIcon = '/assets/icons/earth.svg';

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
        y: 24,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function MarketingSection() {
    return (
        <div className={styles.marketingSection}>
            <div className={styles.centerAlignment}>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <h2>
                            <span>Run Helix</span>
                            For Any Marketing Task
                        </h2>
                        <p>
                            Instantly Create Unlimited
                            Videos and Photos Featuring
                            Your Product
                        </p>
                        <button>
                            Get Started
                        </button>
                    </div>
                    <div className={styles.griditems}></div>
                </div>
            </div>

        </div>
    );
}
