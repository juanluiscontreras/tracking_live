import React, { useCallback, useState } from 'react';
import { Form as FinalForm } from 'react-final-form';
import { FormProps } from './types';

const Form: React.FC<FormProps> = ({
  render,
  onSubmit,
  onSuccess,
  onFailure,
  children,
  mutators,
  initValues,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isFailure, setFailure] = useState(false);
  const handleRender = useCallback((props) => {
    const renderFunction = render || children as any;
    return renderFunction({
      ...props,
      isSubmitting,
      isSuccess,
      isFailure,
    });
  }, [render, isSubmitting, isSuccess, isFailure, children]);
  const handleSubmit = useCallback((values) => {
    setSubmitting(true);
    onSubmit(values).then((response) => {
      setSubmitting(false);
      setSuccess(true);
      if (typeof onSuccess === 'function') {
        onSuccess(response);
      }
    }).catch((error) => {
      setSubmitting(false);
      setFailure(true);
      if (typeof onFailure === 'function') {
        onFailure(error);
      }
    });
  }, [onSubmit, onSuccess, onFailure]);

  return (
    <FinalForm
      onSubmit={handleSubmit}
      render={handleRender}
      mutators={{
        ...mutators,
      }}
      initialValues={initValues}
    />
  );
};

export default Form;
