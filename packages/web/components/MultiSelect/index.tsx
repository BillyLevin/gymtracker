import React from 'react';
import { FieldProps } from 'formik';
import { Props as ReactSelectProps } from 'react-select/lib/Select';
import Select from 'react-select';

const MultiSelect: React.FC<ReactSelectProps & FieldProps> = ({ options, field, form, value }) => (
  <Select
    options={options}
    name={field.name}
    isMulti={true}
    isSearchable={false}
    value={value}
    onChange={(option: any) => form.setFieldValue(field.name, option)}
  />
);

export default MultiSelect;
