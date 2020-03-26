export interface TextInputProps {
  placeholder: string;
  onChange?: (value: string) => void
  value?: string
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  classes?: string[]
  password?: boolean
  input?: any
  meta?: any
}
