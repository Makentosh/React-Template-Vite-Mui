import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

export const MuiRadioButtonFields = ({ name, labelPlacement, rules, buttons, groupLabel }) => {
  const { control } = useFormContext();

  return (
    <FormControl component='fieldset'>
      {groupLabel && <FormLabel component='legend'>{groupLabel}</FormLabel>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={null}
        render={({ field, fieldState: { invalid, error } }) => (
          <RadioGroup
            {...field}
            row
          >
            {buttons?.map((item) => (
              <FormControlLabel
                key={item.value}
                value={item.value}
                labelPlacement={labelPlacement}
                control={<Radio />}
                label={item.label ?? ''}
              />
            ))}

            {invalid && (
              <FormHelperText
                sx={{ ml: '14px' }}
                error={invalid}
              >
                {error.message}
              </FormHelperText>
            )}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

MuiRadioButtonFields.defaultProps = {
  labelPlacement: 'end',
};

MuiRadioButtonFields.propTypes = {
  name: PropTypes.string,
  labelPlacement: PropTypes.string,
  rules: PropTypes.object,
  buttons: PropTypes.array,
  groupLabel: PropTypes.string,
};
