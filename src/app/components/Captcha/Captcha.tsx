import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CaptchaProps } from './types';


const Captcha: React.FC<CaptchaProps> = (props) => {
  const { input } = props;
  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.RECAPTCHA_KEY}
        onChange={response => input.onChange(response)}
      />
    </div>
  );
};

export default Captcha;
