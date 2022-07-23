import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

export const MuiAutocompleteField = ({ name, rules, label, placeholder, options, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={null}
      render={({ field: { ref, onChange, ...field }, fieldState: { invalid, error } }) => (
        <Autocomplete
          {...props}
          {...field}
          options={options}
          size={'small'}
          getOptionLabel={(option) => option?.label ?? ''}
          isOptionEqualToValue={(option, value) => option === value}
          noOptionsText={'Ничего не найдено'}
          onChange={(e, v) => onChange(v?.value)}
          value={(field?.value ? options?.find((x) => x?.value === field?.value) : field?.value) ?? null}
          renderInput={(params) => (
            <TextField
              {...params}
              inputRef={ref}
              fullWidth
              error={invalid}
              helperText={error?.message || ''}
              label={label}
              placeholder={placeholder}
            />
          )}
        />
      )}
    />
  );
};

MuiAutocompleteField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rules: PropTypes.object,
  options: PropTypes.array,
};
