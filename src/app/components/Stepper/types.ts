export interface StepperProps {
  steps: string[]
  actualStep: number
  onChangeStep?: (step: number) => void
}

export interface CircleStepProps {
  step: number
  actualStep: number
  label: string
  onChangeStep: (step: number) => void
}
