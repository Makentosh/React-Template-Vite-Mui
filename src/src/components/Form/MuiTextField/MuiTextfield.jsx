import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { defaultFieldsProps } from '../../../propTypes';

export const MuiTextField = ({ name, label, placeholder, rows, maxRows, multiline, rules, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      rules={rules}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <TextField
            {...props}
            {...field}
            size={'small'}
            variant={'outlined'}
            rows={rows}
            multiline={multiline}
            maxRows={maxRows}
            placeholder={placeholder}
            fullWidth
            error={invalid}
            helperText={error?.message || ''}
            label={label}
          />
        );
      }}
    />
  );
};

MuiTextField.defaultProps = {
  multiline: false,
};

MuiTextField.propTypes = {
  ...defaultFieldsProps,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
};
