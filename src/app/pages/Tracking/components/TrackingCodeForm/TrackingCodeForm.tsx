import React, { useCallback } from 'react';
import { Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TrackingCodeFormProps } from './types';
import { useI18next } from '../../../../../config/i18next';
import Button from '../../../../components/Button/Button';
import Form from '../../../../components/Form/Form';
import TextInput from '../../../../components/TextInput/TextInput';
import Captcha from '../../../../components/Captcha/Captcha';
import routes from '../../../../../constants/routes';
import { nextStep } from '../../../../../redux/operate/actions';
import { showAlert } from '../../../../../redux/alerts/actions';
import TrackingServices from '../../../../../services/TrackingServices';


const TrackingCodeForm: React.FC<TrackingCodeFormProps> = () => {
  const [t] = useI18next();
  const dispatch = useDispatch();
  const history = useHistory();
  const onSuccess = useCallback(() => {
    dispatch(nextStep());
    history.push(routes.STANDAR_TRACKING);
  }, [dispatch, history]);
  const onFailure = useCallback((error: Error) => {
    dispatch(showAlert({
      type: 'error',
      title: error.message,
    }));
  }, [dispatch]);
  const onSubmit = useCallback(({pickitNumber, captchaResponse }) => new Promise((resolve) => {
    TrackingServices.base(pickitNumber).then((response) => {
      resolve(response.data);
    });
  }), []);
  const render = useCallback(({
    handleSubmit,
    isSubmitting,
    isSuccess,
    isFailure,
  }) => (
    <form onSubmit={handleSubmit}>
      <Field
        name="pickitNumber"
        placeholder={t('TrackingCodeForm:trackingCodeInputPlaceHolder')}
        component={TextInput}
      />
      <Field name='captchaResponse' component={Captcha} />
      <Button
        label={t('TrackingCodeForm:sendButtonLabel')}
        type="submit"
        buttonColor="green"
        isSubmitting={isSubmitting}
        submitSuccess={isSuccess}
        submitFailure={isFailure}
      />
    </form>
  ), [t]);
  return (
    <Form
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      onFailure={onFailure}
      render={render}
    />
  );
};

export default TrackingCodeForm;
