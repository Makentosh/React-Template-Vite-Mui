import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { labelPlacementProps } from '../../../propTypes';

export const MuiCheckboxField = ({ labelPlacement, name, label, rules }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      rules={rules}
      render={({ field, fieldState: { invalid, error } }) => (
        <>
          <FormControlLabel
            labelPlacement={labelPlacement}
            control={
              <Checkbox
                checked={field.value}
                {...field}
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

MuiCheckboxField.defaultProps = {
  labelPlacement: 'end',
};

MuiCheckboxField.propTypes = {
  labelPlacement: labelPlacementProps,
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
};
