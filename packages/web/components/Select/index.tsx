import React from 'react';
import { FieldProps } from 'formik';
import { Props as ReactSelectProps } from 'react-select/lib/Select';
import Select from 'react-select';

const SelectComponent: React.FC<ReactSelectProps & FieldProps> = ({
  options,
  field,
  defaultValue,
  form,
}) => (
  <Select
    options={options}
    name={field.name}
    defaultValue={defaultValue}
    onChange={(option: any) => form.setFieldValue(field.name, option.value)}
    isSearchable={false}
  />
);

export default SelectComponent;
