import { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { RemoveRedEyeOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { defaultFieldsProps } from '../../../propTypes';

export const MuiPasswordField = ({ name, label, placeholder, rules, ...props }) => {
  const { control } = useFormContext();
  const [showPassword, setShow] = useState(false);

  const handleViewPassword = () => {
    setShow(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      rules={rules}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <TextField
            variant='outlined'
            label={label}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='Показать пароль'
                    onClick={handleViewPassword}
                    tabIndex={-1}
                  >
                    {showPassword ? <VisibilityOffOutlined /> : <RemoveRedEyeOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder={placeholder}
            fullWidth
            error={invalid}
            helperText={error?.message ?? ''}
            {...field}
            {...props}
          />
        );
      }}
    />
  );
};

MuiPasswordField.propTypes = {
  ...defaultFieldsProps,
};
