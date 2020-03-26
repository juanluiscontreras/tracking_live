import { useState } from 'react';
import i18next, { TFunction } from 'i18next';

i18next.init({
  lng: 'es',
  debug: true,
  initImmediate: false,
});

const requireAllResources = (
  requireContext: __WebpackModuleApi.RequireContext,
) => requireContext.keys().map(requireContext);

if (process.env.NODE_ENV !== 'test') { // just for testing propuse
  requireAllResources(require.context('../app', true, /i18n\.ts$/));
}

export const useI18next = (): [TFunction, (lng: string) => void] => {
  const t = (text: string, interpolation: any) => i18next.t(text, interpolation);
  const [state, setState] = useState({ t });
  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng, (err, newT: TFunction) => {
      setState({ t: newT });
    });
  };
  return [state.t, changeLanguage];
};
