import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { normalizePhoneValue } from '../../../utils';

export const MuiPhoneField = ({ rules, name, label, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={''}
      rules={rules}
      render={({ field, fieldState: { invalid, error } }) => (
        <InputMask
          mask={'+7 (999) 999-99-99'}
          placeholder={'+7 (999) 999-99-99'}
          onChange={(e) => {
            const { value } = e.target;
            field.onChange(normalizePhoneValue(value));
          }}
          value={field.value}
          {...props}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              variant='outlined'
              fullWidth
              label={label}
              error={invalid}
              helperText={error?.message ?? ''}
            />
          )}
        </InputMask>
      )}
    />
  );
};

MuiPhoneField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
};
