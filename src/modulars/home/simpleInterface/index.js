import React from 'react'
import styles from './simpleInterface.module.scss';
export default function SimpleInterface() {
    return (
        <div className={styles.simpleInterface}>
            <div className='container-lg-change'>
                <h3>
                    Simple Interface, Perfect Product Content
                </h3>
                <h4>
                    Start with any product image.
                </h4>
                <p>
                    Done For You- You prompt, then let Helix’s Orchestration Layer pick the model and generate your perfect content.
                    Done With You- You pick the model, then prompt while Helix’s Orchestration Layer delivers perfection.
                </p>
            </div>
        </div>
    )
}
