import { FormControlLabel, FormHelperText, Switch } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

export const MuiSwitchField = ({ name, label, labelPlacement = 'end', rules, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={false}
      render={({ field, fieldState: { invalid, error } }) => (
        <>
          <FormControlLabel
            labelPlacement={labelPlacement}
            // value={checkedValue}
            control={
              <Switch
                checked={field.value}
                {...field}
                {...props}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label={label ?? ''}
          />
          {invalid && (
            <FormHelperText
              sx={{ ml: '14px' }}
              error={invalid}
            >
              {error.message}
            </FormHelperText>
          )}
        </>
      )}
    />
  );
};

MuiSwitchField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  labelPlacement: PropTypes.string,
};
