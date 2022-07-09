import { Controller, useFormContext } from 'react-hook-form';
import { FormControlLabel, FormHelperText, Switch } from '@mui/material';
import { defaultFieldsProps } from '../../../propTypes';

export const MuiSwitchField = ({ name, label, labelPlacement = 'end', rules, checkedValue, ...props }) => {
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
            value={checkedValue}
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
  ...defaultFieldsProps,
};
