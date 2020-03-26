import React, { useCallback } from 'react';
import { StepperProps, CircleStepProps } from './types';
import styles from './styles.module.scss';
import { ReactComponent as CheckIcon } from '../../assets/ico-check.svg';

const CircleStep: React.FC<CircleStepProps> = (props) => {
  const {
    step,
    onChangeStep,
    actualStep,
    label,
  } = props;
  const handleClick = useCallback(() => {
    onChangeStep(step);
  }, [step, onChangeStep]);
  return (
    <div
      className={styles.stepperPoint}
      onClick={handleClick}
      role="presentation"
    >
      <div
        className={styles.stepperPointComplete}
        style={{
          clipPath: `circle(${actualStep >= step ? 10 : 0}px)`,
        }}
      />
      {
        actualStep > step && <CheckIcon />
      }
      <span>{label}</span>
    </div>
  );
};

const Stepper: React.FC<StepperProps> = ({
  steps,
  actualStep,
  onChangeStep,
}) => {
  const stepsNumber = steps.length;
  const lineNumber = stepsNumber - 1;
  const linePosition = 100 - (100 / lineNumber) * actualStep;
  return (
    <div className={styles.stepper}>
      <div
        className={styles.loaderBackground}
      />
      <div
        className={styles.loaderBar}
        style={{
          clipPath: `inset(0 ${linePosition}% 0 0)`,
        }}
      />
      {
        steps.map((step, i) => (
          <CircleStep
            key={step}
            step={i}
            label={step}
            actualStep={actualStep}
            onChangeStep={onChangeStep}
          />
        ))
      }
    </div>
  );
};

export default Stepper;
