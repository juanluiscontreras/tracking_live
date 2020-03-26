import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { ButtonProps } from './types';
import styles from './styles.module.scss';
import { ReactComponent as OkIconSVG } from '../../assets/ico-ok.svg';
import { ReactComponent as FailIconSVG } from '../../assets/collapse.svg';

let interval: NodeJS.Timeout = null;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    label,
    onClick,
    type,
    buttonColor,
    isSubmitting,
    submitSuccess,
    submitFailure,
    disabled,
  } = props;
  const buttonRef: React.Ref<HTMLButtonElement> = useRef(null);
  const [explosionPosition, setExplosionPosition] = useState({
    top: 0,
    left: 0,
  });
  const [loaderWidth, setLoaderWidth] = useState(0);
  const finishSuccess = !isSubmitting && submitSuccess;
  const finishFailure = !isSubmitting && submitFailure;
  const buttonClasses = [
    styles.button,
    buttonColor === 'green' && styles.greenButton,
    (finishSuccess || finishFailure) && styles.transformAnim,
  ].join(' ');

  const loaderClasses = [
    styles.buttonLoading,
    finishFailure && styles.failure,
  ].join(' ');

  const explosionClasses = [
    styles.explosion,
    (finishSuccess || finishFailure) && styles.explosionAnim,
    finishFailure && styles.failure,
    finishSuccess && styles.success,
  ].join(' ');

  const computedPosition = useCallback(() => {
    const rect: DOMRect = buttonRef.current.getBoundingClientRect();
    const top = rect.top + (buttonRef.current.clientHeight / 2);
    const left = rect.left + (buttonRef.current.clientWidth / 2);
    setExplosionPosition({
      top,
      left,
    });
  }, [buttonRef]);

  useEffect(() => {
    computedPosition();
    window.addEventListener('resize', computedPosition);
    return () => {
      window.removeEventListener('resize', computedPosition);
    };
  }, [computedPosition]);

  useEffect(() => {
    if (isSubmitting) {
      interval = setInterval(() => {
        setLoaderWidth((preWidth) => preWidth + 2);
      }, 900);
    } else if (!isSubmitting && (finishSuccess || finishFailure)) {
      clearInterval(interval);
      setLoaderWidth(100);
      setTimeout(() => setLoaderWidth(0), 1800);
    }
  }, [isSubmitting, finishFailure, finishSuccess]);

  return (
    <>
      <button
        ref={buttonRef}
        id="button-id"
        type={type}
        onClick={onClick}
        className={buttonClasses}
        disabled={disabled || isSubmitting}
      >
        {label}
        <div
          className={loaderClasses}
          style={{
            clipPath: `inset(0 ${100 - loaderWidth}% 0 0)`,
          }}
        >
          {label}
        </div>
      </button>
      <div
        className={explosionClasses}
        style={{
          clipPath: explosionPosition.left && `circle(${!(finishSuccess || finishFailure) ? '25px' : '100%'} at ${explosionPosition.left}px ${explosionPosition.top}px)`,
        }}
      >
        <OkIconSVG
          style={{
            left: explosionPosition.left - 12.5,
            top: explosionPosition.top - 12.5,
            visibility: finishSuccess ? 'visible' : 'hidden',
          }}
        />
        <FailIconSVG
          style={{
            left: explosionPosition.left - 12.5,
            top: explosionPosition.top - 12.5,
            visibility: finishFailure ? 'visible' : 'hidden',
          }}
        />
      </div>
    </>
  );
};

export default Button;
