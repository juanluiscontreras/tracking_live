import React, { useCallback, useState } from 'react';
import { TrackingProps } from './types';
import { useI18next } from '../../../config/i18next';
import styles from './styles.module.scss';
import logoPickit from '../../assets/ico-pickit.svg';
import Stepper from '../../components/Stepper/Stepper';
import { ReactComponent as BoxIconSVG } from '../../assets/box-gris.svg';


const StandarTracking: React.FC<TrackingProps> = () => {
  const [t] = useI18next();
  const step = 3;
  const steps = [
    t('StandarTracking:step1'),
    t('StandarTracking:step2'),
    t('StandarTracking:step3'),
    t('StandarTracking:step4'),
    t('StandarTracking:step5'),
  ];
  return (
    <div id="tracking-container" className={styles.trackingContainer}>
      <div id="tracking-header-id" className={styles.trackingHeader}>
        <div className={styles.labels}>
          <div className={styles.leftSpan}>
            <img src={logoPickit} alt="Logo" />
            <span>pickit</span>
          </div>
          <div className={styles.rightSpan}>
            <span>TRACKING </span>
            <span className={styles.boldText}>LIVE</span>
          </div>
        </div>
      </div>
      <div id="tracking-id" className={styles.trackingBody}>
        <div className={styles.labelTrackingCode}>
          <div>
            <h1>PI12356</h1>
          </div>
        </div>
        <div className={styles.stepperMapContainer}>
          <div className={styles.stepperContainer}>
            <Stepper
              actualStep={step}
              steps={steps}
            />
          </div>
          <div className={styles.svgContainer}>
            <div>
              <BoxIconSVG className={styles.bounceBox} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandarTracking;
