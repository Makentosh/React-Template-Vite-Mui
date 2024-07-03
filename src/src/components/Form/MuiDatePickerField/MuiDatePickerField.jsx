import { InsertInvitation } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ruLocale from 'dayjs/locale/ru';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

export const MuiDatePickerField = ({ name, rules, label, mask, format }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, ...field }, fieldState: { invalid, error } }) => (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={ruLocale}
        >
          <DatePicker
            {...field}
            // views={ views }
            // openTo={ openTo }
            clearable={false}
            clearText='Сброс'
            cancelText='Отмена'
            okText='Выбрать'
            todayText='Сегодня'
            autoOk
            onChangeRaw={(e) => e.preventDefault()}
            inputFormat={format}
            // disabled={disabled}
            disableToolbar
            variant='inline'
            mask={mask}
            inputVariant='outlined'
            value={field?.value ? dayjs(field?.value) : null}
            onChange={(value) => onChange(dayjs(value).format(format))}
            // name={name}
            label={label}
            disableMaskedInput={true}
            showTodayButton={true}
            renderInput={(params) => (
              <TextField
                size={'small'}
                fullWidth
                sx={{ minWidth: 240 }}
                {...params}
                error={invalid}
                helperText={error?.message || ''}
              />
            )}
            inputProps={{
              placeholder: format,
              readOnly: true,
              disabled: true,
            }}
            InputProps={{
              endAdornment: <InsertInvitation />,
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

MuiDatePickerField.defaultProps = {
  mask: '____-__-__',
  format: 'YYYY-MM-DD',
};

MuiDatePickerField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  mask: PropTypes.string,
  format: PropTypes.string,
};
