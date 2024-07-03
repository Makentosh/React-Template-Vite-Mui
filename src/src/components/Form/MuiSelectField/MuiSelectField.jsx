import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { defaultFieldsProps } from '../../../propTypes';

export const MuiSelectField = ({ label, options, name, disabled, fullWidth, rules, ...props }) => {
  const { control } = useFormContext();

  if (!Array.isArray(options)) {
    return null;
  }

  return (
    <React.Fragment>
      <Controller
        name={name}
        control={control}
        defaultValue={''}
        rules={rules}
        render={({ field, fieldState: { invalid, error } }) => (
          <FormControl
            size={'small'}
            variant='outlined'
            fullWidth={fullWidth}
            error={invalid}
          >
            <InputLabel id={label}>{label}</InputLabel>
            <Select
              disabled={disabled}
              labelId={label}
              label={label}
              {...field}
              {...props}
            >
              {options &&
                options.map((option, index) => (
                  <MenuItem
                    key={index}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
            </Select>
            {invalid && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
    </React.Fragment>
  );
};

MuiSelectField.propTypes = {
  ...defaultFieldsProps,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};
