import './FormInput.scss';

export const FormInput: React.SFC = ({ error, ...props }: any) => (
  <input {...props} className={error ? 'form-input form-input--error' : 'form-input'} />
);
