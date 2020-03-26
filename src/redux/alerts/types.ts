export const SHOW_ALERT = '@@ALERTS/SHOW_ALERTS';
export const CLOSE_ALERT = '@@ALERTS/CLOSE_ALERTS';

export interface AlertData {
  type: 'info' | 'error' | 'warning';
  title: string;
  confirmMessage?: string
  confirmLabel?: string
  onConfirm?: () => void
  onCancel?: () => void
}

type ShowAlertAction = {
  type: typeof SHOW_ALERT
  payload: AlertData
};

type CloseAlertAction = {
  type: typeof CLOSE_ALERT
};

export type AlertsActions = ShowAlertAction & CloseAlertAction;
