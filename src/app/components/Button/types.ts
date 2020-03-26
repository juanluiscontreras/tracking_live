export interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type: 'button' | 'submit';
  buttonColor: 'green';
  isSubmitting?: boolean;
  submitSuccess?: boolean;
  submitFailure?: boolean;
  disabled?: boolean;
}
