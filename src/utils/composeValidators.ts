export type ValidatorFunction = (value: any) => string | boolean | undefined;

export const composeValidators = (...validators: ValidatorFunction[]) => (value: any) =>
  validators.reduce((error: ReturnType<ValidatorFunction>, validator) => error || validator(value), undefined);

export const required = (value: string) => (value ? undefined : 'Required')

export const isValidEmail = (value: string) => {
  return /\S+@\S+\.\S+/.test(value) ? undefined : 'Please enter a valid email address'
};
