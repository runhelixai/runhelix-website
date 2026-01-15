import React from 'react'
import styles from './adsCurrently.module.scss';
const Tiktok1 = '/assets/images/tiktok1.png';
const Tiktok2 = '/assets/images/tt2.png';
const Icon01 = '/assets/icons/01.svg';
const Icon02 = '/assets/icons/02.svg';
const Icon03 = '/assets/icons/03.svg';
const Icon04 = '/assets/icons/04.svg';
const Icon05 = '/assets/icons/05.svg';
export default function AdsCurrently() {
    return (
        <div className={styles.adsCurrently}>
            <div className={styles.text}>
                <h2>
                    AI Ads Currently Convert Millions in Revenue
                </h2>
                <p>
                    UCG Videos Created with Helix
                </p>
            </div>
            <div className={styles.grid}>
                <div className={styles.griditems}>
                    <img src={Tiktok1} alt='Tiktok1' />
                </div>
                <div className={styles.griditems}>
                    <img src={Tiktok2} alt='Tiktok2' />
                </div>
                <div className={styles.griditems}>
                    <img src={Tiktok1} alt='Tiktok1' />
                </div>
                <div className={styles.griditems}>
                    <img src={Tiktok2} alt='Tiktok2' />
                </div>
            </div>
            <div className={styles.bottomText}>
                <p>
                    Post Directly To
                </p>
                <div className={styles.iconsAlignment}>
                    <img src={Icon01} alt='Icon01' />
                    <img src={Icon02} alt='Icon02' />
                    <img src={Icon03} alt='Icon03' />
                    <img src={Icon04} alt='Icon04' />
                    <img src={Icon05} alt='Icon05' />
                </div>
            </div>
        </div>
    )
}
