import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AlertsProps } from './types';
import Modal from '../Modal/Modal';
import styles from './styles.module.scss';
import { alertsSelector } from '../../../redux/alerts/selectors';
import { AlertData } from '../../../redux/alerts/types';
import infoIcon from '../../assets/ico-ok.svg';
import errorIcon from '../../assets/ico-error.svg';
import { closeAlert } from '../../../redux/alerts/actions';
import SimpleButton from '../SimpleButton/SimpleButton';

const getAlertTheme = (alerts: AlertData) => {
  switch (alerts.type) {
    case 'info':
      return {
        top: styles.info,
        bottom: (
          <img src={infoIcon} alt="INFO" />
        ),
      };
    case 'error':
      return {
        top: styles.error,
        bottom: (
          <img src={errorIcon} alt="INFO" />
        ),
      };
    case 'warning':
      return {
        top: styles.warning,
        bottom: (
          <div className={styles.warningOption}>
            <span>{alerts.confirmMessage}</span>
            <SimpleButton
              label={alerts.confirmLabel}
              buttonColor="green"
              type="button"
              onClick={alerts.onConfirm}
            />
          </div>
        ),
      };
    default:
      return {
        top: '',
        bottom: null,
      };
  }
};

const Alerts: React.FC<AlertsProps> = () => {
  const alerts = useSelector(alertsSelector);
  const dispatch = useDispatch();
  const alertTheme = getAlertTheme(alerts);
  const alertClasses = [styles.alertTop, alertTheme.top].join(' ');
  const onCLose = useCallback(() => {
    dispatch(closeAlert());
  }, [dispatch]);
  return (
    <Modal
      isOpen={alerts.type !== null}
      width="550px"
      height="240px"
      onClose={onCLose}
    >
      <div id="alerts-id" className={styles.alertContainer}>
        <div className={alertClasses}>
          {alerts.title}
        </div>
        <div className={styles.alertBottom}>
          {alertTheme.bottom}
        </div>
      </div>
    </Modal>
  );
};

export default Alerts;
