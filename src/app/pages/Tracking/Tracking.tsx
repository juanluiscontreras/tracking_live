import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TrackingProps } from './types';
import { useI18next } from '../../../config/i18next';
import { TrackingCodeFormValues } from './components/TrackingCodeForm/types';
import TrackingCodeForm from './components/TrackingCodeForm/TrackingCodeForm';
import styles from './styles.module.scss';
import logoPickit from '../../assets/ico-pickit.svg';

const Tracking: React.FC<TrackingProps> = () => {
  const dispatch = useDispatch();
  const [t] = useI18next();
  const handleSendTrackingCode = useCallback(
    (values: TrackingCodeFormValues) => (values),
    [],
  );
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
      <div id="tracking-id" className={styles.trackingFormContainer}>
        <div className={styles.trackingBox}>
          <div className={styles.formContainer}>
            <TrackingCodeForm
              onSubmit={handleSendTrackingCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
