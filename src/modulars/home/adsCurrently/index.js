import React from 'react'
import styles from './adsCurrently.module.scss';
const TiktokFrame = '/assets/images/tiktok-frame.png';
const Tiktok2 = '/assets/images/tt2.png';
const Icon01 = '/assets/icons/01.svg';
const Icon02 = '/assets/icons/02.svg';
const Icon03 = '/assets/icons/03.svg';
const Icon04 = '/assets/icons/04.svg';
const Icon05 = '/assets/icons/05.svg';
const Ads1 = '/assets/video/ads1.mp4';
const Ads2 = '/assets/video/ads2.mp4';
const Ads3 = '/assets/video/ads3.mp4';
const Ads4 = '/assets/video/ads4.mp4';
export default function AdsCurrently() {
    return (
        <div className={styles.adsCurrently}>
            <div className='container-xs'>
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
                        <video src={Ads1} alt="Ads1" autoPlay loop muted playsInline />
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <video src={Ads2} alt="Ads2" autoPlay loop muted playsInline />
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <video src={Ads3} alt="Ads3" autoPlay loop muted playsInline />
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <video src={Ads4} alt="Ads4" autoPlay loop muted playsInline />
                        <div className={styles.frame}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
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
        </div>
    )
}
