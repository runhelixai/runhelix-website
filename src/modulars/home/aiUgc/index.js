import React from 'react'
import styles from './aiUgc.module.scss';
const Topvec = '/assets/images/down-vec.png';
const TopvecMobile = '/assets/images/mobile-vec.png';
const FastMoss = '/assets/icons/fast-moss.svg';
const LeftVideo = '/assets/video/left-video.mp4';
const RightVideo = '/assets/video/right-video.mp4';
const TiktokFrame = '/assets/images/tiktok-frame.png';
const BottomVec = '/assets/images/bottom-vec.png';
const TiktokFrameRight = '/assets/images/tiktok-frame-right.png';
const Icon01 = '/assets/icons/01.svg';
const Icon02 = '/assets/icons/02.svg';
const Icon03 = '/assets/icons/03.svg';
const Icon04 = '/assets/icons/04.svg';
const Icon05 = '/assets/icons/05.svg';
export default function AiUgc() {
    return (
        <div className={styles.aiugc}>
            <div className={styles.topvec}>
                <img src={Topvec} alt='Topvec' />
                <img src={TopvecMobile} alt='TopvecMobile' />
            </div>
            <div className={styles.bottomvec}>
                <img src={BottomVec} alt='BottomVec' />
            </div>
            <div className='container-md'>
                <div className={styles.title}>
                    <h2>
                        AI UGC Ads Currently Convert Millions in Revenue
                    </h2>
                    <p>
                        UCG Videos Created with Helix
                    </p>
                </div>
                <div className={styles.twovideo}>
                    <div className={styles.items}>
                        <video src={LeftVideo} alt="LeftVideo" autoPlay playsInline muted loop></video>
                        <div className={styles.framer}>
                            <img src={TiktokFrame} alt='TiktokFrame' />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <video src={RightVideo} alt="RightVideo" autoPlay playsInline muted loop></video>
                        <div className={styles.framer}>
                            <img src={TiktokFrameRight} alt='TiktokFrameRight' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className={styles.postText}>Post Directly To</p>
            </div>
            <div className={styles.iconCenterAll}>
                <img src={Icon01} alt='Icon01' />
                <img src={Icon02} alt='Icon02' />
                <img src={Icon03} alt='Icon03' />
                <img src={Icon04} alt='Icon04' />
                <img src={Icon05} alt='Icon05' />
            </div>
            <div className={styles.rightAlignment}>
                <span>
                    Source:
                </span>
                <img src={FastMoss} alt='FastMoss' />
            </div>
        </div>
    )
}
