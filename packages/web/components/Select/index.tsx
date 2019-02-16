import { FieldProps } from 'formik';
import React from 'react';
import Select from 'react-select';
import { Props as ReactSelectProps } from 'react-select/lib/Select';
import './Select.scss';

interface ExtraProps {
  hasError: boolean;
}

const SelectComponent: React.FC<ReactSelectProps & FieldProps & ExtraProps> = ({
  options,
  field,
  defaultValue,
  form,
  hasError,
  isMulti,
  isSearchable,
  placeholder,
}) => (
  <Select
    options={options}
    name={field.name}
    defaultValue={defaultValue || undefined}
    onChange={
      isMulti
        ? (option: any) => form.setFieldValue(field.name, option)
        : (option: any) => form.setFieldValue(field.name, option.value)
    }
    className="react-select-container"
    classNamePrefix={hasError ? 'react-select react-select--error' : 'react-select'}
    onMenuClose={() => form.setFieldTouched(field.name)}
    isMulti={isMulti}
    isSearchable={isSearchable}
    placeholder={placeholder}
  />
);

export default SelectComponent;
