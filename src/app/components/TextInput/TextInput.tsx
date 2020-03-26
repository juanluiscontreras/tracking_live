import React, { useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { TextInputProps } from './types';
import styles from './styles.module.scss';
import { useI18next } from '../../../config/i18next';

const TextInput: React.FC<TextInputProps | FieldRenderProps<any, HTMLInputElement>> = (props) => {
  const {
    input,
    meta,
    placeholder,
    onChange,
    value,
    icon: Icon,
    classes = [],
    password,
  } = props;
  const [t] = useI18next();
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (input) {
      input.onChange(event.target.value);
    } else {
      onChange(event.target.value);
    }
  }, [input, onChange]);
  const hasError = meta && meta.invalid && meta.touched;
  const inputClasses = [
    hasError && styles.inputError,
  ].join(' ');

  return (
    <div id="text-input-id" className={[styles.inputContainer, ...classes].join(' ')}>
      <input
        {...input}
        value={input ? input.value : value}
        placeholder={placeholder}
        onChange={handleChange}
        className={inputClasses}
        type={password ? 'password' : 'text'}
      />
      {
        hasError && (
          <span className={styles.errorMessage}>{t(`Validations:${meta.error}`)}</span>
        )
      }
      {
        Icon && <Icon />
      }
    </div>
  );
};

export default TextInput;
