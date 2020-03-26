import { FormRenderProps, AnyObject } from 'react-final-form';
import { AxiosResponse } from 'axios';

export interface FormProps {
  render?: (props: FormRenderProps<AnyObject>) => React.ReactNode
  onSubmit: (values?: any) => Promise<AxiosResponse<any> | any>
  onSuccess?: (response: AxiosResponse) => void
  onFailure?: (error: Error) => void
  mutators?: any
  initValues?: any
}

export interface OwnFormRenderProps extends FormRenderProps {
  isSubmitting: boolean
  isSuccess: boolean
  isFailure: boolean
}
