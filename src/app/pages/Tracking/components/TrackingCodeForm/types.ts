import { AxiosResponse } from 'axios';

export interface TrackingCodeFormProps {
  onSubmit: (values: TrackingCodeFormValues) => Promise<AxiosResponse<any>>
  onSuccess: (response: AxiosResponse) => void
  onFailure: (error: Error) => void
}

export interface TrackingCodeFormValues {
  email: string;
}
